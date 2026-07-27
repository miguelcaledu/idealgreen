'use client';

import { useEffect, useState } from 'react';
import { supabase, saveSubmission } from '@/lib/supabaseClient';
import BookingForm from '@/components/contact/BookingForm';

const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || 'admjorge';

const FORM_LABELS = {
  contact_booking: 'Contact / Booking',
  tailor_made: 'Tailor-Made Proposal',
  corporate: 'Corporate Account',
  test: 'Test Submission',
};

function ActionButton({ onClick, active, activeLabel, idleLabel, activeColor }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: '6px 12px',
        background: active ? activeColor : 'none',
        border: `1px solid ${active ? activeColor : 'rgba(255,255,255,0.3)'}`,
        color: '#fff',
        cursor: 'pointer',
        fontSize: 12,
        fontWeight: 600,
      }}
    >
      {active ? activeLabel : idleLabel}
    </button>
  );
}

function SubmissionRow({ row, onToggle, onDelete, onSave }) {
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState('');
  const [parseError, setParseError] = useState('');

  const startEdit = () => {
    setDraft(JSON.stringify(row.data, null, 2));
    setParseError('');
    setEditing(true);
    setOpen(true);
  };

  const cancelEdit = () => {
    setEditing(false);
    setParseError('');
  };

  const saveEdit = async () => {
    let parsed;
    try {
      parsed = JSON.parse(draft);
    } catch (e) {
      setParseError('Invalid JSON — ' + e.message);
      return;
    }
    setParseError('');
    const ok = await onSave(row.id, parsed);
    if (ok) setEditing(false);
  };

  return (
    <div style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 16,
          padding: '16px 20px',
          flexWrap: 'wrap',
        }}
      >
        <button
          onClick={() => setOpen((o) => !o)}
          style={{
            flex: 1,
            minWidth: 260,
            background: 'none',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            cursor: 'pointer',
            textAlign: 'left',
            color: '#fff',
            font: '500 14px var(--font-body, sans-serif)',
            padding: 0,
          }}
        >
          <span style={{ minWidth: 180, opacity: row.is_read ? 0.6 : 1 }}>{new Date(row.created_at).toLocaleString()}</span>
          <span style={{ color: 'var(--green-300, #7fd68a)' }}>{FORM_LABELS[row.form_type] || row.form_type}</span>
          <span style={{ color: 'var(--stone-400, #8a938c)', fontSize: 12 }}>{row.lang?.toUpperCase()}</span>
          <span style={{ fontSize: 12, transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 150ms' }}>▾</span>
        </button>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <ActionButton
            onClick={() => onToggle(row.id, 'is_read', !row.is_read)}
            active={row.is_read}
            activeLabel="Read"
            idleLabel="Mark as Read"
            activeColor="#2f5f6b"
          />
          <ActionButton
            onClick={() => onToggle(row.id, 'is_paid', !row.is_paid)}
            active={row.is_paid}
            activeLabel="Paid"
            idleLabel="Mark as Paid"
            activeColor="#2f6b3f"
          />
          <button
            onClick={() => (editing ? cancelEdit() : startEdit())}
            style={{ padding: '6px 12px', background: 'none', border: '1px solid rgba(255,255,255,0.3)', color: '#fff', cursor: 'pointer', fontSize: 12, fontWeight: 600 }}
          >
            {editing ? 'Cancel edit' : 'Edit'}
          </button>
          <button
            onClick={() => onDelete(row.id)}
            style={{ padding: '6px 12px', background: 'none', border: '1px solid rgba(232,136,136,0.5)', color: '#e88', cursor: 'pointer', fontSize: 12, fontWeight: 600 }}
          >
            Delete
          </button>
        </div>
      </div>
      {open && !editing && (
        <pre
          style={{
            margin: 0,
            padding: '0 20px 20px',
            fontSize: 13,
            color: 'var(--stone-200, #d8dbd8)',
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-word',
            fontFamily: 'monospace',
          }}
        >
          {JSON.stringify(row.data, null, 2)}
        </pre>
      )}
      {editing && (
        <div style={{ padding: '0 20px 20px', display: 'flex', flexDirection: 'column', gap: 10 }}>
          <textarea
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            rows={Math.min(20, draft.split('\n').length + 1)}
            style={{
              width: '100%',
              boxSizing: 'border-box',
              fontFamily: 'monospace',
              fontSize: 13,
              background: '#0c1310',
              color: '#fff',
              border: '1px solid rgba(255,255,255,0.2)',
              padding: 12,
              resize: 'vertical',
            }}
          />
          {parseError && <span style={{ color: '#e88', fontSize: 13 }}>{parseError}</span>}
          <div style={{ display: 'flex', gap: 8 }}>
            <button
              onClick={saveEdit}
              style={{ padding: '8px 16px', background: '#2f6b3f', border: 'none', color: '#fff', cursor: 'pointer', fontSize: 13, fontWeight: 600 }}
            >
              Save
            </button>
            <button
              onClick={cancelEdit}
              style={{ padding: '8px 16px', background: 'none', border: '1px solid rgba(255,255,255,0.3)', color: '#fff', cursor: 'pointer', fontSize: 13 }}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function AdminPage() {
  const [authed, setAuthed] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [authError, setAuthError] = useState('');
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [addingTest, setAddingTest] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);

  const load = async () => {
    setLoading(true);
    setError('');
    const { data, error: fetchError } = await supabase
      .from('form_submissions')
      .select('*')
      .order('created_at', { ascending: false });
    if (fetchError) {
      setError(fetchError.message);
    } else {
      setRows(data || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (authed) load();
  }, [authed]);

  const addTestSubmission = async () => {
    setAddingTest(true);
    await saveSubmission('test', 'en', {
      note: 'This is a test submission created from the admin page.',
      createdBy: 'admin test button',
    });
    await load();
    setAddingTest(false);
  };

  const handleToggle = async (id, field, value) => {
    setRows((prev) => prev.map((r) => (r.id === id ? { ...r, [field]: value } : r)));
    const { data: updated, error: updateError } = await supabase.from('form_submissions').update({ [field]: value }).eq('id', id).select();
    if (updateError || !updated || updated.length === 0) {
      setRows((prev) => prev.map((r) => (r.id === id ? { ...r, [field]: !value } : r)));
      setError(
        updateError
          ? `Could not update: ${updateError.message}`
          : 'Update did not apply — the "Allow public update" policy may not be set up in Supabase yet.'
      );
    }
  };

  const handleSaveData = async (id, newData) => {
    const previousRows = rows;
    setRows((prev) => prev.map((r) => (r.id === id ? { ...r, data: newData } : r)));
    const { data: updated, error: updateError } = await supabase.from('form_submissions').update({ data: newData }).eq('id', id).select();
    if (updateError || !updated || updated.length === 0) {
      setRows(previousRows);
      setError(
        updateError
          ? `Could not save: ${updateError.message}`
          : 'Save did not apply — the "Allow public update" policy may not be set up in Supabase yet.'
      );
      return false;
    }
    return true;
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this submission? This cannot be undone.')) return;
    const previousRows = rows;
    setRows((prev) => prev.filter((r) => r.id !== id));
    const { data: deleted, error: deleteError } = await supabase.from('form_submissions').delete().eq('id', id).select();
    if (deleteError || !deleted || deleted.length === 0) {
      setRows(previousRows);
      setError(
        deleteError
          ? `Could not delete: ${deleteError.message}`
          : 'Delete did not apply — the "Allow public delete" policy may not be set up in Supabase yet.'
      );
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (passwordInput === ADMIN_PASSWORD) {
      setAuthed(true);
      setAuthError('');
    } else {
      setAuthError('Incorrect password.');
    }
  };

  if (!authed) {
    return (
      <div style={{ minHeight: '100vh', background: '#0c1310', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'sans-serif' }}>
        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: 16, width: 280 }}>
          <h1 style={{ font: '600 20px sans-serif', margin: 0 }}>Admin</h1>
          <input
            type="password"
            value={passwordInput}
            onChange={(e) => setPasswordInput(e.target.value)}
            placeholder="Password"
            autoFocus
            style={{ padding: '10px 12px', border: '1.5px solid rgba(255,255,255,0.16)', background: '#0f1613', color: '#fff', fontSize: 14 }}
          />
          {authError && <span style={{ color: '#e88', fontSize: 13 }}>{authError}</span>}
          <button
            type="submit"
            style={{ padding: '10px 0', background: '#2f6b3f', color: '#fff', border: 'none', cursor: 'pointer', fontSize: 14, fontWeight: 600 }}
          >
            Enter
          </button>
        </form>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', background: '#0c1310', color: '#fff', fontFamily: 'sans-serif', padding: '40px 24px' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24, flexWrap: 'wrap', gap: 12 }}>
          <h1 style={{ font: '600 24px sans-serif', margin: 0 }}>Form submissions</h1>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <button
              onClick={() => setShowAddForm((s) => !s)}
              style={{ padding: '8px 16px', background: showAddForm ? 'none' : '#2f6b3f', border: showAddForm ? '1px solid rgba(255,255,255,0.3)' : 'none', color: '#fff', cursor: 'pointer', fontSize: 13, fontWeight: 600 }}
            >
              {showAddForm ? 'Cancel' : 'Add'}
            </button>
            <button
              onClick={addTestSubmission}
              disabled={addingTest}
              style={{ padding: '8px 16px', background: 'none', border: '1px solid rgba(255,255,255,0.3)', color: '#fff', cursor: 'pointer', fontSize: 13 }}
            >
              {addingTest ? 'Adding…' : 'Add test submission'}
            </button>
            <button
              onClick={load}
              disabled={loading}
              style={{ padding: '8px 16px', background: 'none', border: '1px solid rgba(255,255,255,0.3)', color: '#fff', cursor: 'pointer', fontSize: 13 }}
            >
              {loading ? 'Loading…' : 'Refresh'}
            </button>
          </div>
        </div>

        {showAddForm && (
          <div style={{ background: '#0f1613', border: '1px solid rgba(255,255,255,0.1)', padding: 32, marginBottom: 32 }}>
            <h2 style={{ font: '600 18px sans-serif', margin: '0 0 20px' }}>Add a request manually</h2>
            <BookingForm
              lang="en"
              onSuccess={() => {
                setShowAddForm(false);
                load();
              }}
            />
          </div>
        )}

        {error && <p style={{ color: '#e88' }}>Error: {error}</p>}
        {!error && !loading && rows.length === 0 && <p style={{ color: 'var(--stone-400, #8a938c)' }}>No submissions yet.</p>}
        {rows.length > 0 && (
          <div style={{ border: '1px solid rgba(255,255,255,0.1)', background: '#0a0f0c' }}>
            {rows.map((row) => (
              <SubmissionRow key={row.id} row={row} onToggle={handleToggle} onDelete={handleDelete} onSave={handleSaveData} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

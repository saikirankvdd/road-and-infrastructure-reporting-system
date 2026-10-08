export const fetchReports = async () => {
  try {
    const res = await fetch('/api/reports');
    const data = await res.json();
    return data.reports || [];
  } catch (err) {
    console.error('fetchReports error:', err);
    return [];
  }
};

export const createReport = async (reportData) => {
  try {
    const res = await fetch('/api/reports', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(reportData)
    });
    const data = await res.json();
    return data;
  } catch (err) {
    console.error('createReport error:', err);
    return { success: false, error: err.message };
  }
};

export const analyzeRoadIssue = async ({ description, category, location, imageBase64 }) => {
  try {
    const res = await fetch('/api/analyze-issue', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ description, category, location, imageBase64 })
    });
    const data = await res.json();
    return data;
  } catch (err) {
    console.error('analyzeRoadIssue error:', err);
    return { success: false, error: err.message };
  }
};

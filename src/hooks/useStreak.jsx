export const useStreak = (tasks) => {
  const dates = tasks
    .filter(t => t.completedAt)
    .map(t => new Date(t.completedAt).toDateString());

  const unique = [...new Set(dates)].sort(
    (a, b) => new Date(b) - new Date(a)
  );

  let streak = 0;
  let current = new Date();

  for (let d of unique) {
    if (new Date(d).toDateString() === current.toDateString()) {
      streak++;
      current.setDate(current.getDate() - 1);
    } else break;
  }

  return streak;
};
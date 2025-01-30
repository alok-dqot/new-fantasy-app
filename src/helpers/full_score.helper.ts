export function fullScore(runs: string, wickets: string, overs: string) {
  if (runs === undefined || wickets === undefined || overs === undefined) {
    return "";
  }
  return `${runs}/${wickets} (${overs})`;
}

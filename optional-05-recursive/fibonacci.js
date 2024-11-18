function fibonacci(n) {
  if (n === 0) return [0];
  if (n === 1) return [0, 1];
  const series = fibonacci(n - 1);
  series.push(series[n - 1] + series[n - 2]);
  return series;
}

// Jangan hapus kode di bawah ini!
export default fibonacci;

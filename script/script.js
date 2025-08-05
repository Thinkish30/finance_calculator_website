function calculateSIP() {
  const monthly = parseFloat(document.getElementById('sip-monthly').value);
  const years = parseFloat(document.getElementById('sip-years').value);
  const rate = parseFloat(document.getElementById('sip-rate').value) / 100 / 12;
  const n = years * 12;

  const futureValue = monthly * ((Math.pow(1 + rate, n) - 1) / rate) * (1 + rate);
  document.getElementById('sip-result').innerText = `Future Value: ₹${futureValue.toFixed(2)}`;

  const invested = monthly * n;
  const gain = futureValue - invested;
  const ctx = document.getElementById('sip-chart').getContext('2d');
  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Invested', 'Returns'],
      datasets: [{
        label: 'SIP Breakdown',
        data: [invested, gain],
        backgroundColor: ['#3B82F6', '#10B981']
      }]
    }
  });
}

function calculateEMI() {
  const principal = parseFloat(document.getElementById('loan-amount').value);
  const years = parseFloat(document.getElementById('loan-years').value);
  const rate = parseFloat(document.getElementById('loan-rate').value) / 100 / 12;
  const n = years * 12;

  const emi = (principal * rate * Math.pow(1 + rate, n)) / (Math.pow(1 + rate, n) - 1);
  const totalPayable = emi * n;
  const totalInterest = totalPayable - principal;

  document.getElementById('loan-result').innerText = `Monthly EMI: ₹${emi.toFixed(2)} | Total Interest: ₹${totalInterest.toFixed(2)} | Total Payable: ₹${totalPayable.toFixed(2)}`;
}

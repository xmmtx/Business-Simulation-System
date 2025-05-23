exports.submitDecision = (req, res) => {
  const decision = req.body;

  // 简化的算法逻辑
  const costA = 60;
  const costB = 40;

  const salesA = Math.min(decision.prod_a, 1000);
  const salesB = Math.min(decision.prod_b, 800);

  const revenue = salesA * decision.price_a + salesB * decision.price_b;
  const cost = decision.prod_a * costA + decision.prod_b * costB + decision.salary + decision.ad_a + decision.ad_b;
  const profit = revenue - cost - decision.loan * 0.05;

  res.json({
    team_name: decision.team_name,
    revenue,
    profit: profit.toFixed(2),
  });
};

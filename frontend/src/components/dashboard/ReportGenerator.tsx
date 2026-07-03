import { jsPDF } from "jspdf";

interface ReportData {
  metrics: {
    aqi: number;
    pm25: number;
    temp: number|string;
    humidity: number;
    wind: number;
    fireZones: number;
  };
  simulationResult?: {
    predictedAqi: number;
    healthImpact: string;
  };
  recommendations: any[];
  title: string;
  timestamp: string;
}

export const generateIntelligenceReport = async (data: ReportData) => {
  const doc = new jsPDF("p", "mm", "a4");
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  
  // --- Header ---
  doc.setFillColor(15, 23, 42); // Slate-900
  doc.rect(0, 0, pageWidth, 45, "F");
  
  // Decorative line in header
  doc.setDrawColor(56, 189, 248); // Sky-400
  doc.setLineWidth(1.5);
  doc.line(15, 32, 60, 32);

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(26);
  doc.setFont("helvetica", "bold");
  doc.text("TerraForge", 15, 22);
  doc.setTextColor(56, 189, 248);
  doc.text("Environmental OS", 65, 22);
  
  doc.setTextColor(203, 213, 225); // Slate-300
  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  doc.text("PROPRIETARY INTELLIGENCE ANALYSIS REPORT • CONFIDENTIAL", 15, 40);
  doc.text(`SESSION ID: TF-${Math.random().toString(36).substring(7).toUpperCase()}`, pageWidth - 15, 40, { align: "right" });

  let cursorY = 55;

  // --- Summary Brief ---
  doc.setTextColor(15, 23, 42);
  doc.setFontSize(18);
  doc.setFont("helvetica", "bold");
  doc.text("Executive Summary", 15, cursorY);
  cursorY += 8;
  
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  doc.text(`Report Generation Date: ${data.timestamp}`, 15, cursorY);
  cursorY += 12;

  // --- Risk Matrix (Metrics Grid) ---
  doc.setFillColor(248, 250, 252); // Slate-50
  doc.setDrawColor(226, 232, 240); // Slate-200
  doc.roundedRect(12, cursorY - 5, pageWidth - 24, 55, 3, 3, "FD");

  doc.setTextColor(71, 85, 105); // Slate-600
  doc.setFontSize(11);
  doc.setFont("helvetica", "bold");
  doc.text("REAL-TIME ENVIRONMENTAL PARAMETERS", 15, cursorY + 3);
  cursorY += 12;

  const metrics = [
    { label: "AQI INDEX", value: data.metrics.aqi, detail: data.metrics.aqi > 150 ? "CRITICAL" : "STABLE" },
    { label: "PM2.5 CONC.", value: `${data.metrics.pm25} ug/m3`, detail: "LIVE SYNC" },
    { label: "THERMAL", value: `${data.metrics.temp} C`, detail: "ATMOSPHERIC" },
    { label: "HUMIDITY", value: `${data.metrics.humidity}%`, detail: "RELATIVE" },
    { label: "WIND VEL.", value: `${data.metrics.wind} km/h`, detail: "VECTORIAL" },
    { label: "FIRE ZONES", value: data.metrics.fireZones, detail: "VIIRS DETECTED" },
  ];

  doc.setFontSize(9);
  metrics.forEach((m, i) => {
    const col = i % 3;
    const row = Math.floor(i / 3);
    const x = 20 + (col * (pageWidth / 3 - 8));
    const y = cursorY + (row * 18);
    
    doc.setTextColor(148, 163, 184); // Slate-400
    doc.setFont("helvetica", "bold");
    doc.text(m.label, x, y);
    
    doc.setTextColor(15, 23, 42);
    doc.setFontSize(14);
    doc.text(`${m.value}`, x, y + 6);
    
    doc.setFontSize(7);
    const detailColor = m.detail === "CRITICAL" ? [239, 68, 68] : [71, 85, 105];
    doc.setTextColor(detailColor[0], detailColor[1], detailColor[2]);
    doc.text(m.detail, x, y + 10);
    doc.setFontSize(9);
  });
  cursorY += 50;

  // --- Scale Legend ---
  doc.setFontSize(8);
  doc.setTextColor(100, 116, 139);
  doc.text("AQI LEGEND:", 15, cursorY);
  
  const colors = ["#22c55e", "#eab308", "#f97316", "#ef4444", "#7f1d1d"];
  colors.forEach((c, i) => {
    doc.setFillColor(c);
    doc.rect(35 + (i * 25), cursorY - 2.5, 5, 3, "F");
  });
  doc.text("GOOD", 42, cursorY);
  doc.text("MODERATE", 67, cursorY);
  doc.text("UNHEALTHY", 92, cursorY);
  doc.text("CRITICAL", 117, cursorY);
  doc.text("HAZARDOUS", 142, cursorY);
  cursorY += 15;

  // --- AI Analysis Section ---
  if (data.simulationResult) {
    doc.setFillColor(240, 249, 255); // Sky-50
    doc.setDrawColor(186, 230, 253); // Sky-200
    doc.roundedRect(12, cursorY - 5, pageWidth - 24, 50, 3, 3, "FD");
    
    doc.setTextColor(2, 132, 199); // Sky-700
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("TerraForge-X1 Predictive Analysis", 15, cursorY + 5);
    
    doc.setTextColor(15, 23, 42);
    doc.setFontSize(10);
    doc.text(`PREDICTED AQI POST-INTERVENTION: ${data.simulationResult.predictedAqi}`, 15, cursorY + 15);
    
    doc.setFont("helvetica", "normal");
    const impactText = doc.splitTextToSize(data.simulationResult.healthImpact, pageWidth - 35);
    doc.text(impactText, 15, cursorY + 22);
    
    cursorY += 60;
  }

  // --- Comprehensive Policy Roadmap ---
  doc.setTextColor(15, 23, 42);
  doc.setFontSize(16);
  doc.setFont("helvetica", "bold");
  doc.text("Strategic Implementation Roadmap", 15, cursorY);
  cursorY += 12;

  data.recommendations.forEach((rec, i) => {
    if (cursorY > 240) {
      doc.addPage();
      cursorY = 20;
    }

    doc.setFillColor(255, 255, 255);
    doc.setDrawColor(226, 232, 240);
    doc.roundedRect(15, cursorY - 5, pageWidth - 30, 42, 2, 2, "D");

    // Side accent tab
    const typeStr = rec.type || "Policy";
    const tabColor = typeStr.includes("Strict") ? [239, 68, 68] : typeStr.includes("Moderate") ? [245, 158, 11] : [34, 197, 94];
    doc.setFillColor(tabColor[0], tabColor[1], tabColor[2]);
    doc.rect(15, cursorY - 5, 2, 42, "F");

    doc.setFontSize(11);
    doc.setTextColor(15, 23, 42);
    doc.setFont("helvetica", "bold");
    doc.text(`${typeStr}: ${rec.title}`, 22, cursorY + 5);
    
    doc.setFontSize(8);
    doc.setTextColor(100, 116, 139);
    doc.text(`PHASE: IMMEDIATE DEPLOYMENT • CONFIDENCE: ${rec.confidence}%`, 22, cursorY + 12);

    doc.setTextColor(71, 85, 105);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9.5);
    const descText = doc.splitTextToSize(rec.desc, pageWidth - 45);
    doc.text(descText, 22, cursorY + 22);

    cursorY += 50;
  });

  // --- Methodology & Disclaimer ---
  if (cursorY > 240) doc.addPage(), cursorY = 20;
  
  doc.setTextColor(148, 163, 184); // Slate-400
  doc.setFontSize(8);
  doc.setFont("helvetica", "bold");
  doc.text("TECHNICAL METHODOLOGY", 15, cursorY);
  cursorY += 5;
  
  doc.setFont("helvetica", "normal");
  const methodology = doc.splitTextToSize(
    "This report is generated using the TerraForge-X1 proprietary architecture. Data is ingested from the VIIRS SNPP Near Real-Time (NRT) satellite streams and Open-Meteo atmospheric forecast nodes. Predictions are calculated using a multi-layered neural network trained on regional stubble-burning historical datasets. This analysis is advisory and subject to real-world atmospheric volatility.",
    pageWidth - 30
  );
  doc.text(methodology, 15, cursorY);

  // --- Footer on all pages ---
  const pageCount = doc.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    doc.setDrawColor(241, 245, 249);
    doc.line(15, pageHeight - 15, pageWidth - 15, pageHeight - 15);
    
    doc.setFontSize(7);
    doc.setTextColor(148, 163, 184);
    doc.text(
      "© 2026 TERRAFORGE ENVIRONMENTAL INTELLIGENCE UNIT • SYSTEM GEN-ID: " + Date.now().toString(36).toUpperCase(),
      pageWidth / 2,
      pageHeight - 10,
      { align: "center" }
    );
    doc.text(`PG ${i} / ${pageCount}`, pageWidth - 15, pageHeight - 10, { align: "right" });
  }

  // Save the PDF
  const filename = `TerraForge_Intelligence_Report_${new Date().toISOString().split('T')[0]}.pdf`;
  doc.save(filename);
};

const r1 = obj.key2 ? "SI" : "NO"
const r2 = obj.key2 || obj.key3 || "default"
const r3 = obj.pais ?. ciudad?. nombre || "N/A"

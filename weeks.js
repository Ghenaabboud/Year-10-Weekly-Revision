/* =========================================================
   Year 10 Biology — Weekly Revision content
   Unit 1: Cells (one criterion per week)
   ---------------------------------------------------------
   To add a week: copy one week object, give it a new id
   (w2, w3 ...), set opens/due dates and write the questions.
   Question types:
     mcq      one correct option (auto-marked)
     match    a dropdown per row (auto-marked, 1 mark per row)
     num      one number, accepted between min and max
     numtable a number per row, accepted within tol
     text     written answer, min words enforced, model answer
              shown after submission
     info     stimulus text / tables (no marks)
   ========================================================= */

window.REVISION_WEEKS = [
{
  id: "w1",
  title: "Cells, specialised cells and transport",
  topic: "Unit 1: Cells",
  lessons: "Unit 1 – Lessons 3–5",
  opens: "2026-11-02T07:00:00+04:00",
  due: "2026-11-08T23:59:00+04:00",
  minutes: 40,
  sections: [
  {
    crit: "R", name: "Recall missions",
    items: [
      { type: "info", mission: { n: 1, title: "Cell ID", lesson: "Lesson 3 · What are cells?",
        story: "A new sample has arrived at the lab. Before you can identify it, prove you remember what every cell is built from." } },
      { type: "info", predict: { q: "A cell is 2 µm long and has <b>no nucleus</b>. What is it most likely to be?",
        options: ["A plant cell", "A red blood cell", "A prokaryotic cell such as a bacterium", "A nerve cell"], answer: 2,
        reveal: "The size gives it away. A red blood cell also has no nucleus, but it is about 7 µm across and it is eukaryotic: it loses its nucleus as it matures. A cell of about 2 µm with its DNA loose in the cytoplasm is prokaryotic." } },
      { type: "info", sim: { name: "cellExplorer", title: "Label the cells" } },
      { type: "info", flash: [
        { q: "What are the three principles of cell theory?", a: "1. All living organisms are made of one or more cells. 2. The cell is the basic unit of structure and function. 3. All cells arise from pre-existing cells." },
        { q: "What is the ONE feature that tells you a cell is prokaryotic?", a: "No nucleus: its DNA is free in the cytoplasm (often as a loop). Prokaryotes also have no membrane-bound organelles." },
        { q: "Typical size: prokaryotic vs eukaryotic cells?", a: "Prokaryotic: about 0.1–10 micrometres. Eukaryotic: about 10–100 micrometres." }
      ] },
      { id: "w1r1", type: "match", marks: 6,
        prompt: "<b>Sort</b> each feature: is it found in prokaryotic cells only, eukaryotic cells only, or both?",
        head: ["Feature", "Found in"],
        options: ["Prokaryotic only", "Eukaryotic only", "Both"],
        rows: [
          { label: "DNA free in the cytoplasm (no nucleus)", answer: "Prokaryotic only" },
          { label: "Membrane-bound nucleus", answer: "Eukaryotic only" },
          { label: "Mitochondria", answer: "Eukaryotic only" },
          { label: "Ribosomes", answer: "Both" },
          { label: "Cell membrane", answer: "Both" },
          { label: "Cytoplasm", answer: "Both" }
        ] },
      { id: "w1r2", type: "match", marks: 6,
        prompt: "Organelle library: <b>identify</b> the job of each organelle.",
        head: ["Organelle", "Job"],
        options: ["controls the cell's activities and stores DNA", "makes proteins", "releases energy by respiration", "modifies and packages proteins", "carries out photosynthesis", "supports the cell and keeps its shape", "digests waste material"],
        rows: [
          { label: "Nucleus", answer: "controls the cell's activities and stores DNA" },
          { label: "Ribosome", answer: "makes proteins" },
          { label: "Mitochondrion", answer: "releases energy by respiration" },
          { label: "Golgi apparatus", answer: "modifies and packages proteins" },
          { label: "Chloroplast", answer: "carries out photosynthesis" },
          { label: "Cell wall", answer: "supports the cell and keeps its shape" }
        ] },
      { id: "w1r3", type: "mcq", marks: 1,
        prompt: "Spot the correct statement.",
        options: ["Prokaryotic cells have a nucleus that stores their DNA.", "Eukaryotic cells are usually smaller than prokaryotic cells.", "Both cell types have membrane-bound organelles such as mitochondria.", "Every cell is surrounded by a cell membrane and contains ribosomes and cytoplasm."], answer: 3,
        explain: "Prokaryotes have no nucleus, eukaryotic cells are usually larger (10–100 µm), and only eukaryotes have membrane-bound organelles. All cells share a cell membrane, cytoplasm and ribosomes." },

      { type: "info", exam: "<b>In criterion A this becomes:</b> “<b>Compare and contrast</b> prokaryotic and eukaryotic cells [4]” (question A2). Use <i>both</i> for similarities and <i>whereas</i> for differences, and give one point per mark." },

      { type: "info", mission: { n: 2, title: "Specialist match", lesson: "Lesson 4 · Specialised cells",
        story: "The Abu Dhabi Stem Cells Center needs a lab assistant who knows how cells become specialised. Show them you are ready." } },
      { type: "info", predict: { q: "A stem cell taken from an adult's <b>bone marrow</b> is given the chemical signal to become a <b>nerve cell</b>. What happens?",
        options: ["It becomes a nerve cell, because stem cells can become anything", "It does not become a nerve cell", "It becomes a nerve cell, but only if it divides first"], answer: 1,
        reveal: "Adult bone-marrow stem cells can only make blood cells. Their <b>potency</b> is limited. Embryonic stem cells can become almost any cell type. This is why the ADSCC has to choose the right type of stem cell for each treatment." } },
      { type: "info", sim: { name: "stemLab", title: "Stem cell lab" } },
      { type: "info", flash: [
        { q: "What is a stem cell?", a: "An unspecialised cell that can divide to make more stem cells (self-renewal) and whose daughter cells can differentiate into specialised cells." },
        { q: "What does 'cell potency' mean?", a: "The range of cell types a stem cell can become. It depends on the type of stem cell, so not every stem cell can become every cell." },
        { q: "Why does a sperm cell's midpiece contain many mitochondria?", a: "Mitochondria release energy by respiration, which powers the tail (flagellum) so the sperm can swim to the egg." }
      ] },
      { id: "w1r4", type: "match", marks: 4,
        prompt: "<b>Identify</b> the key adaptation of each specialised cell.",
        head: ["Specialised cell", "Key adaptation"],
        options: ["no nucleus, leaving more room for haemoglobin", "long extension that increases surface area", "midpiece packed with mitochondria and a long tail", "long axon with branched ends", "many chloroplasts"],
        rows: [
          { label: "Red blood cell (carries oxygen)", answer: "no nucleus, leaving more room for haemoglobin" },
          { label: "Root hair cell (absorbs water and minerals)", answer: "long extension that increases surface area" },
          { label: "Sperm cell (swims to the egg)", answer: "midpiece packed with mitochondria and a long tail" },
          { label: "Nerve cell (carries electrical signals)", answer: "long axon with branched ends" }
        ] },
      { id: "w1r5", type: "cloze", marks: 4,
        prompt: "Complete the description of stem cells.",
        text: "Stem cells are [[0]] cells. They divide to produce more stem cells: this is called [[1]]. Some of their daughter cells develop structures for one particular job: this is called [[2]]. The types of cell a stem cell can turn into is called its [[3]].",
        options: ["unspecialised", "specialised", "self-renewal", "differentiation", "potency", "osmosis"],
        blanks: ["unspecialised", "self-renewal", "differentiation", "potency"] },
      { id: "w1r6", type: "mcq", marks: 1,
        prompt: "Why do root hair cells have <b>no</b> chloroplasts?",
        options: ["They are too small to hold chloroplasts.", "They are underground, so they receive no light and cannot photosynthesise.", "Chloroplasts would block water from entering.", "They get all their energy from the soil."], answer: 1,
        explain: "Root hair cells are underground and never receive light, so chloroplasts would be useless. Their job is absorption, not photosynthesis." },

      { type: "info", exam: "<b>In criterion A this becomes:</b> the ADSCC question (A5), strand (ii): <b>apply</b> what you know about potency and rejection to a real treatment in the UAE." },

      { type: "info", mission: { n: 3, title: "Transport detective", lesson: "Lesson 5 · Cell transport",
        story: "Bustanica, Dubai's vertical farm, has a problem with its lettuce roots. First, prove you can work out how substances get in and out of cells." } },
      { type: "info", predict: { q: "A 1 cm agar cube and a 6 cm agar cube are soaked in acid for 10 minutes. Which one has the <b>greater percentage</b> of its volume reached by the acid?",
        options: ["The 1 cm cube", "The 6 cm cube", "Both the same: the acid moves at the same speed"], answer: 0,
        reveal: "The acid moves at the same speed into both, but the small cube has a much bigger surface area to volume ratio (6 : 1 compared with 1 : 1), so a much larger share of it is reached. Big cells have the same problem." } },
      { type: "info", sim: { name: "saVLab", title: "Agar cube lab: surface area to volume" } },
      { type: "info", sim: { name: "membraneLab", title: "Across the membrane: diffusion vs active transport" } },
      { type: "info", flash: [
        { q: "What happens to the SA:V ratio as a cell gets bigger?", a: "It decreases. Volume grows faster than surface area, so each unit of volume has less membrane for exchange. This is one reason cells divide instead of growing very large." },
        { q: "Passive vs active transport?", a: "Passive (diffusion, osmosis): down a concentration gradient, no energy needed. Active transport: against the gradient (low → high), needs energy from respiration (ATP) and carrier proteins." },
        { q: "What is dynamic equilibrium?", a: "When concentrations are equal: particles keep moving randomly, but there is no net change in concentration." }
      ] },
      { id: "w1r7", type: "numtable", marks: 4,
        prompt: "<b>Calculate</b> for each cube. Surface area = 6 × edge², volume = edge³, SA:V = surface area ÷ volume. Give SA:V as a number (for 6:1 type 6).",
        head: ["Value", "Answer"],
        rows: [
          { label: "SA:V of a 2 cm cube", answer: 3.0, tol: 0.05 },
          { label: "Surface area of a 5 cm cube (cm²)", answer: 150.0, tol: 0.05 },
          { label: "Volume of a 5 cm cube (cm³)", answer: 125.0, tol: 0.05 },
          { label: "SA:V of a 5 cm cube (to 1 d.p.)", answer: 1.2, tol: 0.05 }
        ] },
      { id: "w1r8", type: "match", marks: 4,
        prompt: "<b>Identify</b> the transport process in each situation at a root hair cell.",
        head: ["Situation", "Process"],
        options: ["diffusion", "osmosis", "active transport"],
        rows: [
          { label: "Oxygen moves into the root hair cell from water with more dissolved oxygen", answer: "diffusion" },
          { label: "Water moves into the root hair cell from a dilute solution", answer: "osmosis" },
          { label: "Mineral ions move in from soil water where their concentration is lower than in the cell", answer: "active transport" },
          { label: "Carbon dioxide made in respiration moves out of the cell", answer: "diffusion" }
        ] },
      { id: "w1r9", type: "mcq", marks: 1,
        prompt: "Which process needs energy from respiration?",
        options: ["Diffusion", "Osmosis", "Active transport", "All three"], answer: 2,
        explain: "Only active transport needs energy (ATP), because it moves substances against their concentration gradient." },

      { type: "info", exam: "<b>In criterion A this becomes:</b> question A6. It gives you data (6 : 1 and 1.5 : 1). <b>Quote the numbers</b> in your answer, then explain what a smaller SA : V means for exchange across the membrane." }
    ]
  },
  {
    crit: "A", name: "Knowing and understanding",
    items: [
      { type: "info",
        html: "<p>These questions are in the style of the MYP eAssessment. They test three strands: <b>(i)</b> explaining scientific knowledge, <b>(ii)</b> applying it to familiar and unfamiliar situations, and <b>(iii)</b> analysing and evaluating information to make a judgement.</p>" },

      { id: "w1a1", type: "text", marks: 3, minWords: 20,
        prompt: "<b>State</b> the three principles of cell theory.",
        model: "1. All living organisms are made of one or more cells (1). 2. The cell is the basic unit of structure and function in living organisms (1). 3. All cells arise from pre-existing cells (1).",
        points: ["All living things are made of one or more cells", "The cell is the basic unit of structure and function", "All cells come from pre-existing cells"] },

      { id: "w1a2", type: "text", marks: 4, minWords: 40,
        prompt: "<b>Compare and contrast</b> prokaryotic and eukaryotic cells.",
        hint: "<b>Compare and contrast</b> means give similarities AND differences. Use words like “both”, “whereas” and “however”. Aim for at least one similarity and three differences.",
        model: "Similarity: both prokaryotic and eukaryotic cells have a cell membrane, cytoplasm and ribosomes (1). Differences: prokaryotic cells have no nucleus and their DNA is free in the cytoplasm, whereas eukaryotic cells have their DNA enclosed in a nucleus (1). Prokaryotic cells have no membrane-bound organelles, whereas eukaryotic cells have organelles such as mitochondria (1). Prokaryotic cells are much smaller (about 0.1–10 µm) than eukaryotic cells (about 10–100 µm) (1).",
        points: ["Similarity: both have cell membrane / cytoplasm / ribosomes", "Nucleus: absent in prokaryotes (DNA free) vs present in eukaryotes", "Membrane-bound organelles only in eukaryotes", "Size: prokaryotes smaller than eukaryotes"] },

      { id: "w1a3", type: "text", marks: 3, minWords: 25,
        prompt: "A mutation stops the Golgi apparatus in a cell from working. <b>Predict</b> what would happen to the proteins made by this cell and <b>explain</b> your prediction.",
        model: "Proteins would still be made by the ribosomes and assembled in the endoplasmic reticulum (1), but they would not be modified and packaged (1), so they could not be sent to where they are needed in the cell or released from it, and they would not work properly (1).",
        points: ["Proteins are still made (ribosomes / ER)", "Golgi normally modifies and packages proteins", "So proteins are not packaged or transported to where they are needed"] },

      { id: "w1a4", type: "text", marks: 3, minWords: 25,
        prompt: "<b>Explain</b> how the structure of a root hair cell is suited to its function.",
        model: "A root hair cell absorbs water and mineral ions from the soil (1). Its long, thin extension increases the surface area of the membrane in contact with soil water, so more water and ions can be absorbed at the same time (1). It has no chloroplasts because it is underground and receives no light, so it does not photosynthesise; it may have many mitochondria to release energy for the active transport of mineral ions (1).",
        points: ["Function: absorbs water and mineral ions", "Long extension → larger surface area → faster absorption", "Second adaptation explained (no chloroplasts / mitochondria for active transport)"] },

      { id: "w1a5", type: "text", marks: 3, minWords: 30,
        prompt: "In 2023, the Abu Dhabi Stem Cells Center (ADSCC) treated a patient with Multiple Sclerosis using a bone-marrow stem-cell transplant made from the <b>patient's own</b> stem cells. <b>Explain</b> why doctors must choose a specific type of stem cell, and <b>suggest</b> why they used the patient's own cells.",
        model: "Stem cells have different potency: the type of stem cell determines which specialised cells it can differentiate into (1), so doctors must use a stem cell that can become the type of cell needed to repair that tissue; any stem cell would not work (1). Using the patient's own stem cells means the immune system recognises them as 'self', so they are less likely to be rejected (1).",
        points: ["Potency: stem-cell type determines which cells it can become", "So the stem cell must match the tissue being repaired", "Own cells: less risk of rejection by the immune system"] },

      { id: "w1a6", type: "text", marks: 3, minWords: 30,
        prompt: "A 1 cm cube has a surface area to volume ratio of 6:1, but a 4 cm cube has a ratio of only 1.5:1. Use this information to <b>explain</b> why cells divide instead of growing very large.",
        model: "As a cell gets larger, its volume increases faster than its surface area, so the SA:V ratio falls (from 6:1 to 1.5:1) (1). The membrane is the exchange surface, so a large cell has less membrane per unit of volume to take in nutrients and oxygen and remove wastes (1). Substances would not move in and out fast enough to meet the cell's needs, so cells divide to keep a high SA:V ratio (1).",
        points: ["Volume increases faster than surface area, SA:V decreases (uses data)", "Less membrane (exchange surface) per unit volume", "Exchange too slow for the cell's needs, so cells divide"] },

      { id: "w1a8", type: "text", marks: 3, minWords: 30,
        prompt: "A student writes: <i>“Diffusion and active transport are the same thing, because both move particles across the cell membrane.”</i> <b>Evaluate</b> this statement.",
        hint: "<b>Evaluate</b> means weigh up what is correct and what is wrong in the statement, then give a judgement.",
        model: "The student is partly right: both processes move particles across the cell membrane (1). However, diffusion is passive: particles move down a concentration gradient (high to low) and no energy is needed, whereas active transport moves particles against a concentration gradient (low to high) and needs energy from respiration (ATP) and carrier proteins (1). So the statement is incorrect: they are different processes, for example oxygen enters a root hair cell by diffusion but mineral ions are absorbed by active transport (1).",
        points: ["Similarity acknowledged: both move particles across the membrane", "Difference: direction relative to gradient and energy (ATP) needed", "Clear judgement that the statement is wrong, with an example"] }
    ]
  }
  ]
},
{
  id: "w2",
  title: "Osmosis investigations: planning and processing",
  topic: "Unit 1: Cells",
  lessons: "Unit 1 – Lessons 6–7",
  opens: "2026-11-09T07:00:00+04:00",
  due: "2026-11-15T23:59:00+04:00",
  minutes: 60,
  sections: [
  {
    crit: "R", name: "Skills workshop: how to write criteria B and C", short: "skills workshop",
    tests: "Step-by-step lessons on how to write each part of criteria B and C, with quick marked checks.",
    how: "Each mission teaches <b>one part</b> of criterion B or C. Read the <b>Learn</b> card, then answer the <b>Check yourself</b> questions. Finish each mission to unlock the next one. You will use every skill in the carrot investigation afterwards.",
    items: [
      /* ---------- Mission 1: research question ---------- */
      { type: "info", mission: { n: 1, title: "The research question", lesson: "Criterion B · strand i",
        story: "Every investigation starts with one clear question. A focused question tells the examiner exactly what you will change, what you will measure and how." } },
      { type: "info", learn: { h: "Write a research question in 4 parts",
        html: "<div class='frame'>How does <span class='p1'>① the independent variable + its range</span> affect <span class='p2'>② the dependent variable</span> <span class='p3'>③ + how it is measured</span> in <span class='p4'>④ the organism or tissue</span>?</div>"
          + "<ol class='steps'><li><b>Name the variable you change</b> and give its range, e.g. <i>salt concentration (0, 2, 4, 6, 8 and 10%)</i>.</li><li><b>Name what you measure.</b> Be precise: <i>percentage change in mass</i>, not just <i>mass</i> or <i>the cucumber</i>.</li><li><b>Say how you measure it</b>, with the instrument and its precision: <i>using a balance (0.01 g)</i>.</li><li><b>Name the tissue or organism</b> and, if useful, the time: <i>cucumber chips after 20 minutes</i>.</li></ol>"
          + "<div class='wex'><b>Worked example: Lesson 7</b>How does <span class='p1'>salt concentration (0, 2, 4, 6, 8 and 10%)</span> affect <span class='p2'>the percentage change in mass</span> of <span class='p4'>cucumber chips after 20 minutes</span>, <span class='p3'>measured using a balance (0.01 g)</span>?</div>"
          + "<div class='mist'><b>Common mistakes</b><ul><li>“<i>Does salt affect cucumbers?</i>” A yes/no question with no range and no measurement.</li><li>“<i>What happens to cucumber in salt water?</i>” The dependent variable is missing.</li></ul></div>"
          + "<p><b>Strand i also asks you to explain the problem.</b> In 2–3 sentences, say <b>why</b> the question matters, using science: water moves in or out of cells by osmosis, plant cells need water to stay turgid, and a real example such as salty soil in the UAE.</p>" } },
      { id: "w2r1", type: "mcq", marks: 1,
        prompt: "Which is the <b>best</b> research question?",
        options: ["Does sugar affect potatoes?", "What happens to potato cylinders in sugar solution?", "How does sucrose concentration (0, 0.2, 0.4, 0.6, 0.8 and 1.0 mol/dm³) affect the percentage change in mass of potato cylinders after 30 minutes, measured using a balance (0.01 g)?", "How does the mass of a potato change over time?"], answer: 2,
        explain: "It has all four parts: the independent variable with its range, the dependent variable, how it is measured, and the tissue. The others are missing the range, the measurement or the independent variable." },
      { id: "w2r2", type: "match", marks: 4,
        prompt: "A student wrote: <i>“How does the concentration of sugar solution (0–1.0 mol/dm³) affect the percentage change in length of beetroot strips after 30 minutes, measured with a ruler (mm)?”</i> <b>Identify</b> each part of the question.",
        head: ["Part of the question", "What it is"],
        options: ["the independent variable", "the range of the independent variable", "the dependent variable", "how the dependent variable is measured", "a control variable"],
        rows: [
          { label: "concentration of sugar solution", answer: "the independent variable" },
          { label: "0–1.0 mol/dm³", answer: "the range of the independent variable" },
          { label: "percentage change in length", answer: "the dependent variable" },
          { label: "measured with a ruler (mm)", answer: "how the dependent variable is measured" }
        ] },
      { type: "info", exam: "<b>In criterion B this becomes:</b> “<b>Formulate</b> a research question” and “<b>Explain</b> why this question is worth investigating.” For the top level (7–8), all four parts must be there <i>and</i> your explanation must use science, not just “because it is interesting”." },

      /* ---------- Mission 2: hypothesis ---------- */
      { type: "info", mission: { n: 2, title: "The hypothesis", lesson: "Criterion B · strand ii",
        story: "A hypothesis is a prediction you can test, plus the science that explains it. The “because” part is where most of the marks are." } },
      { type: "info", learn: { h: "If … then … because …",
        html: "<div class='frame'>If <span class='p1'>[the independent variable changes like this]</span>, then <span class='p2'>[the dependent variable will change like this]</span>, because <span class='p3'>[the scientific reason]</span>.</div>"
          + "<ol class='steps'><li><b>Predict both ends.</b> Say what happens at <b>low</b> concentration AND at <b>high</b> concentration.</li><li><b>Give the direction:</b> gain or lose mass, and “more as the concentration increases”.</li><li><b>Explain with the 4 osmosis steps</b> from Lesson 6:<br>① <b>Compare:</b> the solution is hypotonic / hypertonic compared with the cell sap.<br>② <b>Water concentration:</b> so the water concentration is higher / lower outside the cells.<br>③ <b>Movement:</b> water moves into / out of the cells by osmosis through the partially permeable membrane.<br>④ <b>Effect:</b> so the cells become turgid and gain mass / become plasmolysed and lose mass.</li></ol>"
          + "<div class='wex'><b>Worked example: Lesson 7</b>If the salt concentration is low (0–1%), then the chips will gain mass, because the solution is hypotonic: the water concentration is higher outside, so water enters the cells by osmosis through the partially permeable membrane and the cells become turgid. If the salt concentration is high (4–10%), then the chips will lose mass, and lose more as the concentration increases, because the solution is hypertonic, so water leaves the cells by osmosis and the cells become plasmolysed.</div>"
          + "<div class='mist'><b>Not good enough</b><ul><li>“<i>The cucumber will change.</i>” This can't be tested: change how?</li><li>“<i>If salt increases, mass decreases.</i>” There's no “because”, so there are no marks for scientific reasoning.</li><li>“<i>Salt moves into the cells.</i>” Wrong: in osmosis, <b>water</b> moves.</li></ul></div>" } },
      { id: "w2r3", type: "cloze", marks: 6,
        prompt: "Complete this hypothesis for potato cylinders in sucrose solution.",
        text: "If the sucrose concentration is [[0]], then the potato cylinders will gain mass, because the solution is [[1]] compared with the cell sap. The water concentration is [[2]] outside the cells, so water moves [[3]] the cells by [[4]] through the partially permeable membrane, and the cells become [[5]].",
        options: ["low", "high", "hypotonic", "hypertonic", "higher", "lower", "into", "out of", "osmosis", "active transport", "turgid", "plasmolysed"],
        blanks: ["low", "hypotonic", "higher", "into", "osmosis", "turgid"] },
      { id: "w2r4", type: "mcq", marks: 1,
        prompt: "Which “because” correctly explains why potato cylinders <b>lose</b> mass in a <b>high</b> sucrose concentration?",
        options: ["because sucrose moves into the cells and makes them heavier", "because the solution is hypertonic, so the water concentration is lower outside and water moves out of the cells by osmosis", "because the cells use energy to pump water out by active transport", "because the solution is hypotonic, so water moves into the cells"], answer: 1,
        explain: "In a hypertonic solution the water concentration is lower outside the cells, so water leaves by osmosis (a passive process). Sucrose is too big to cross the membrane." },
      { type: "info", exam: "<b>In criterion B this becomes:</b> “<b>Formulate</b> a testable hypothesis and <b>explain</b> it using scientific reasoning.” A prediction alone gets 1–2. A prediction for low <i>and</i> high concentrations, explained with the 4 osmosis steps, gets 7–8." },

      /* ---------- Mission 3: variables and sufficient data ---------- */
      { type: "info", mission: { n: 3, title: "Variables and sufficient data", lesson: "Criterion B · strand iii",
        story: "Examiners want to know exactly what you will change, what you will measure, what you will keep the same, and how much data you will collect." } },
      { type: "info", learn: { h: "Explain every variable, not just name it",
        html: "<div class='tbl'><table><thead><tr><th>Variable</th><th>What to write</th><th>Example (Lesson 7)</th></tr></thead><tbody>"
          + "<tr><td><b>Independent</b><br>(what you change)</td><td>What it is, <b>how</b> you change it, and the values you will use (at least 5)</td><td>Salt concentration: use 0, 2, 4, 6, 8 and 10% solutions, measuring 50 cm³ of each with a measuring cylinder.</td></tr>"
          + "<tr><td><b>Dependent</b><br>(what you measure)</td><td>What it is, the <b>instrument</b> and <b>units</b>, and any calculation</td><td>% change in mass: weigh each chip before and after on a balance (0.01 g), then % change = (end − start) ÷ start × 100.</td></tr>"
          + "<tr><td><b>Control</b><br>(kept the same)</td><td>What + how + why</td><td>See the sentence frame below.</td></tr></tbody></table></div>"
          + "<div class='frame'>I will keep <span class='p1'>[the control variable]</span> the same by <span class='p2'>[exactly how]</span>, because <span class='p3'>[how it would otherwise change the results]</span>.</div>"
          + "<div class='wex'><b>Worked example</b>I will keep the <b>size of the chips</b> the same by cutting every chip to 4 cm × 1 cm × 0.5 cm with a ruler, because a bigger chip has a larger surface area and would gain or lose more water.</div>"
          + "<p><b>Sufficient data</b> means enough data to see a pattern you can trust:</p><ul><li>at least <b>5 values</b> of the independent variable, including 0%</li><li>at least <b>3 repeats</b> at each value, so you can spot anomalies and calculate a <b>mean</b></li></ul><p><b>Relevant data</b> means data that answers your question, e.g. mass before and after, not the colour of the chip.</p>" } },
      { id: "w2r5", type: "match", marks: 5,
        prompt: "Potato cylinders are left in sucrose solutions (0–1.0 mol/dm³) for 30 minutes and weighed before and after. <b>Identify</b> each variable.",
        head: ["Variable", "Type"],
        options: ["independent variable", "dependent variable", "control variable"],
        rows: [
          { label: "sucrose concentration", answer: "independent variable" },
          { label: "percentage change in mass", answer: "dependent variable" },
          { label: "length and diameter of each cylinder", answer: "control variable" },
          { label: "time left in the solution", answer: "control variable" },
          { label: "volume of solution in each tube", answer: "control variable" }
        ] },
      { id: "w2r6", type: "mcq", marks: 1,
        prompt: "Which plan collects <b>sufficient</b> data?",
        options: ["2 concentrations, 1 cylinder each", "6 concentrations, 1 cylinder each", "6 concentrations, 3 cylinders each, then calculate a mean for each concentration", "1 concentration, 10 cylinders"], answer: 2,
        explain: "At least 5 values of the independent variable show the pattern, and 3 repeats at each value let you spot anomalies and calculate a reliable mean." },
      { type: "info", exam: "<b>In criterion B this becomes:</b> “<b>Explain</b> how you will manipulate the variables” and “<b>Explain</b> how you will collect sufficient data.” Use the what + how + why frame for every control variable." },

      /* ---------- Mission 4: method and safety ---------- */
      { type: "info", mission: { n: 4, title: "The method and safety", lesson: "Criterion B · strand iv",
        story: "A good method is like a recipe: another student could follow it and get the same results without asking you a single question." } },
      { type: "info", learn: { h: "Write a method someone else could follow",
        html: "<ol class='steps'><li><b>Number every step</b>, with one action per step.</li><li><b>Give amounts and sizes:</b> 50 cm³, 4 cm × 1 cm × 0.5 cm, 20 minutes.</li><li><b>Name the equipment</b> and its precision: balance (0.01 g), measuring cylinder, ruler.</li><li><b>Show how each control is kept the same</b>, e.g. “blot by rolling once on a paper towel”.</li><li><b>Measure before AND after</b> (start mass and end mass).</li><li><b>Say how many repeats</b> you will do, and that you will calculate the mean.</li><li><b>Safety:</b> name the hazard, then the precaution: “The knife is sharp, so cut on a white tile, away from your hand.”</li></ol>"
          + "<div class='mist'><b>Not good enough</b><ul><li>“<i>Put the chip in salt water, then weigh it.</i>” There are no amounts, no start mass, no time and no repeats.</li><li>“<i>Be careful.</i>” This is not a safety precaution: what hazard, and what will you do?</li></ul></div>" } },
      { id: "w2r7", type: "match", marks: 6,
        prompt: "Put the cucumber method in the right order. Choose the action for each step.",
        head: ["Step", "Action"],
        options: ["Label six beakers and add 50 cm³ of each salt solution", "Cut six chips, 4 cm × 1 cm × 0.5 cm, using a ruler", "Blot each chip once and weigh it on a balance (0.01 g)", "Put one chip in each beaker for exactly 20 minutes", "Remove each chip with forceps, blot it the same way and reweigh", "Repeat twice more and calculate the mean % change"],
        rows: [
          { label: "Step 1", answer: "Label six beakers and add 50 cm³ of each salt solution" },
          { label: "Step 2", answer: "Cut six chips, 4 cm × 1 cm × 0.5 cm, using a ruler" },
          { label: "Step 3", answer: "Blot each chip once and weigh it on a balance (0.01 g)" },
          { label: "Step 4", answer: "Put one chip in each beaker for exactly 20 minutes" },
          { label: "Step 5", answer: "Remove each chip with forceps, blot it the same way and reweigh" },
          { label: "Step 6", answer: "Repeat twice more and calculate the mean % change" }
        ] },
      { id: "w2r8", type: "mcq", marks: 1,
        prompt: "Which is a correct safety precaution?",
        options: ["Wear a lab coat to stay clean.", "Be careful with the salt.", "The knife is sharp, so cut on a white tile, away from your hand.", "Do not eat the cucumber because it tastes salty."], answer: 2,
        explain: "A safety precaution names the hazard (sharp knife) and the action that reduces the risk (cut on a tile, away from your hand)." },
      { type: "info", exam: "<b>In criterion B this becomes:</b> “<b>Design</b> a logical, complete and safe method.” For 7–8, it must include amounts, sizes, time, measuring instruments, how controls are kept the same, repeats and safety." },

      /* ---------- Mission 5: process and present data ---------- */
      { type: "info", mission: { n: 5, title: "Process and present the data", lesson: "Criterion C · strand i",
        story: "Raw masses mean nothing until you process them. Calculate, average, then show the pattern on a graph that the examiner can read at a glance." } },
      { type: "info", learn: { h: "Calculate → average → present",
        html: "<ol class='steps'><li><b>Change in mass</b> = end mass − start mass. Keep the sign: <b>+</b> for a gain, <b>−</b> for a loss.</li><li><b>% change</b> = change ÷ start mass × 100. Round to 1 decimal place.</li><li><b>Mean</b> = add the repeats, then divide by how many you used. <b>Leave out an anomaly</b> and divide by the number you kept. The mean of negative values is negative.</li></ol>"
          + "<div class='wex'><b>Worked example: Lesson 7</b>Start = 2.40 g, end = 2.04 g<br>Change = 2.04 − 2.40 = <b>−0.36 g</b><br>% change = −0.36 ÷ 2.40 × 100 = <b>−15.0%</b></div>"
          + "<p><b>Table rules:</b> the independent variable goes in the first column; units go in the headings, not in the cells; use the same number of decimal places.</p>"
          + "<p><b>Graph rules:</b></p><ul><li>Independent variable on the x-axis, dependent variable on the y-axis, both with units.</li><li>When values are positive <b>and</b> negative, the <b>zero line goes inside the graph</b>, not at the bottom.</li><li>Use even steps above and below zero.</li><li>Plot each mean with a small cross (×), then draw a smooth line of best fit (don't join the dots).</li></ul>"
          + "<div class='mist'><b>Mistakes from the last assessment</b><ul><li>Starting the y-axis at 0 at the bottom, so negative values had nowhere to go.</li><li>Putting −2 lower than −8. Remember: −8 is further <b>below</b> zero.</li><li>Plotting a negative value above the zero line.</li></ul></div>" } },
      { id: "w2r9", type: "numtable", marks: 3,
        prompt: "<b>Calculate</b> the % change in mass for each potato cylinder (1 d.p.).<div class='tbl'><table><thead><tr><th>Cylinder</th><th>Start mass (g)</th><th>End mass (g)</th></tr></thead><tbody><tr><td>A</td><td>2.50</td><td>2.80</td></tr><tr><td>B</td><td>3.20</td><td>2.88</td></tr><tr><td>C</td><td>2.00</td><td>1.93</td></tr></tbody></table></div>",
        howto: "Type the number to 1 decimal place. Type a minus sign (-) for a loss, e.g. -4.5.",
        head: ["Cylinder", "% change in mass"],
        rows: [
          { label: "A", answer: 12.0, tol: 0.05 },
          { label: "B", answer: -10.0, tol: 0.05, hint: "Change = 2.88 − 3.20 = −0.32 g; −0.32 ÷ 3.20 × 100" },
          { label: "C", answer: -3.5, tol: 0.05, hint: "Change = 1.93 − 2.00 = −0.07 g; −0.07 ÷ 2.00 × 100" }
        ] },
      { id: "w2r10", type: "numtable", marks: 2,
        prompt: "<b>Calculate</b> the mean % change for each concentration (1 d.p.). One result is an anomaly: leave it out.<div class='tbl'><table><thead><tr><th>Concentration</th><th>Trial 1</th><th>Trial 2</th><th>Trial 3</th></tr></thead><tbody><tr><td>0.1 mol/dm³</td><td>+6.2</td><td>+5.6</td><td>+6.5</td></tr><tr><td>0.5 mol/dm³</td><td>−5.2</td><td>−1.0</td><td>−5.4</td></tr></tbody></table></div>",
        howto: "Type the number to 1 decimal place. Type a minus sign (-) for a negative value.",
        head: ["Concentration", "Mean % change"],
        rows: [
          { label: "0.1 mol/dm³", answer: 6.1, tol: 0.05 },
          { label: "0.5 mol/dm³", answer: -5.3, tol: 0.05, hint: "−1.0 is the anomaly. (−5.2 + −5.4) ÷ 2 = −5.3" }
        ] },
      { type: "info", sim: { name: "graphPlot", title: "Practice: plot positive and negative values" } },
      { type: "info", exam: "<b>In criterion C this becomes:</b> “<b>Calculate</b>…”, “<b>Present</b> the data in a suitable table” and “<b>Plot</b> a graph”. Marks are lost for a missing sign, a missing unit or a zero line in the wrong place." },

      /* ---------- Mission 6: interpret ---------- */
      { type: "info", mission: { n: 6, title: "Describe, explain and test the hypothesis", lesson: "Criterion C · strands ii and iii",
        story: "First say what the data shows, with numbers. Then explain it with science. Then decide whether your hypothesis was right." } },
      { type: "info", learn: { h: "Describe → explain → judge the hypothesis",
        html: "<p><b>1. Describe the trend</b> (what happens), with numbers and units:</p><div class='frame'>As the <span class='p1'>[independent variable]</span> increased from <span class='p1'>__</span> to <span class='p1'>__</span>, the <span class='p2'>[dependent variable]</span> decreased from <span class='p2'>__</span> to <span class='p2'>__</span>.</div>"
          + "<ul><li>Say where the line <b>crosses zero</b>: that is where there is no net water movement, so the solution is <b>isotonic</b> with the cell sap. Read it off the graph and give it as an estimate.</li><li>Mention any anomaly.</li></ul>"
          + "<p><b>2. Explain the trend</b> (why it happens) using the 4 osmosis steps: compare → water concentration → osmosis through the partially permeable membrane → effect on the cells and their mass.</p>"
          + "<p><b>3. Judge the hypothesis.</b> Is it supported, partly supported or not supported? Quote data as evidence.</p>"
          + "<div class='wex'><b>Worked example</b>As the salt concentration increased from 0% to 10%, the mean % change in mass decreased from +6.0% to −18.0%. The line crosses zero at about 1%, so 1% salt is roughly isotonic with the cucumber cell sap. At 0%, the solution was hypotonic, so water moved into the cells by osmosis… My hypothesis is supported because the chips gained mass at low concentrations and lost more mass as the concentration increased.</div>" } },
      { id: "w2r11", type: "mcq", marks: 1,
        prompt: "Mean % change in mass of potato: 0.0 mol/dm³ = +15.0%, 0.4 mol/dm³ = −5.1%, 1.0 mol/dm³ = −19.2%. Which is the best <b>description</b> of the trend?",
        options: ["The potato changed mass.", "The mass went down.", "As the sucrose concentration increased from 0.0 to 1.0 mol/dm³, the mean % change in mass decreased from +15.0% to −19.2%.", "The potato lost mass because water moved out by osmosis."], answer: 2,
        explain: "A description gives the direction of the trend with numbers and units from both ends. Option 4 is an explanation, not a description." },
      { id: "w2r12", type: "num", marks: 1, min: 0.28, max: 0.36, unit: "mol/dm³",
        prompt: "Mean % change: 0.2 mol/dm³ = +3.0% and 0.4 mol/dm³ = −2.0%. <b>Estimate</b> the concentration where the line crosses zero (the isotonic point).",
        explain: "Zero is between +3.0 and −2.0. That's 3 parts out of 5 of the way from 0.2 to 0.4: 0.2 + 0.6 × 0.2 = 0.32 mol/dm³. Accept 0.28–0.36." },
      { type: "info", exam: "<b>In criterion C this becomes:</b> “<b>Describe</b> the trend”, “<b>Explain</b> the results using scientific reasoning” and “<b>Discuss</b> whether the hypothesis is supported.” Always quote numbers from the data." },

      /* ---------- Mission 7: evaluate and improve ---------- */
      { type: "info", mission: { n: 7, title: "Evaluate and improve the method", lesson: "Criterion C · strands iv and v",
        story: "No method is perfect. Examiners reward students who spot what went wrong, say how it affected the results, and fix it precisely." } },
      { type: "info", learn: { h: "Limitation → effect → improvement",
        html: "<div class='frame'><span class='p1'>Limitation:</span> what was wrong. <span class='p2'>Effect:</span> how it changed the results. <span class='p3'>Improvement:</span> exactly what you would do instead.</div>"
          + "<div class='tbl'><table><thead><tr><th>Limitation</th><th>Effect on results</th><th>Specific improvement</th></tr></thead><tbody>"
          + "<tr><td>Chips blotted differently</td><td>Extra surface water adds mass, so the end mass is too high</td><td>Blot every chip by rolling it once on a paper towel</td></tr>"
          + "<tr><td>Only one chip per concentration</td><td>An anomaly can't be spotted</td><td>Do 3 repeats and calculate a mean</td></tr>"
          + "<tr><td>Chips cut to different sizes by eye</td><td>Different surface areas, so different amounts of water move</td><td>Cut with a cork borer and ruler to the same length and diameter</td></tr>"
          + "<tr><td>Temperature not controlled</td><td>Osmosis is faster when it's warmer</td><td>Keep all tubes in a water bath at 25 °C</td></tr>"
          + "<tr><td>Big gaps between concentrations</td><td>The isotonic point can only be estimated roughly</td><td>Add more concentrations close to where the line crosses zero</td></tr></tbody></table></div>"
          + "<div class='mist'><b>Too vague, so no marks</b><ul><li>“<i>Be more careful.</i>” “<i>Use better equipment.</i>” “<i>Human error.</i>”</li></ul></div>"
          + "<p><b>Extension:</b> suggest a <b>new</b> question to investigate next, e.g. testing a different vegetable or a different solute.</p>" } },
      { id: "w2r13", type: "match", marks: 4,
        prompt: "Match each limitation to the best improvement.",
        head: ["Limitation", "Improvement"],
        options: ["Blot every chip by rolling it once on a paper towel", "Do 3 repeats at each concentration and calculate a mean", "Keep all the tubes in a water bath at 25 °C", "Add more concentrations close to where the line crosses zero"],
        rows: [
          { label: "Some chips were wetter than others when weighed", answer: "Blot every chip by rolling it once on a paper towel" },
          { label: "There was only one chip at each concentration", answer: "Do 3 repeats at each concentration and calculate a mean" },
          { label: "The room got warmer during the experiment", answer: "Keep all the tubes in a water bath at 25 °C" },
          { label: "The isotonic point could only be estimated roughly", answer: "Add more concentrations close to where the line crosses zero" }
        ] },
      { id: "w2r14", type: "mcq", marks: 1,
        prompt: "Which improvement would get marks?",
        options: ["Be more careful when cutting.", "Use better equipment.", "Use a cork borer and a ruler to cut every cylinder to 1 cm diameter and 4 cm long.", "Avoid human error."], answer: 2,
        explain: "It says exactly what to do and with which equipment, so it is a specific improvement. The others are too vague." },
      { type: "info", exam: "<b>In criterion C this becomes:</b> “<b>Evaluate</b> the method” and “<b>Suggest</b> improvements and an extension.” Write limitation → effect → improvement for each point." }
    ]
  },
  {
    crit: "B", name: "Inquiring and designing: salty water on a UAE farm",
    tests: "Plan a new osmosis investigation using the steps from the skills workshop: research question, hypothesis, variables, sufficient data and method.",
    tip: "Use the sentence frame in each hint. Every answer must mention the carrot, the salt solutions and osmosis.",
    items: [
      { type: "info",
        html: "<p><b>The problem.</b> A farm near Al Ain grows carrots using water pumped from a well. Over the years the groundwater has become saltier. The farmer has noticed that carrots in the saltiest fields are soft and bendy instead of firm.</p><p>A carrot is a <b>root</b>. Its cells take in water from the soil by osmosis. You are a plant scientist. Plan an investigation to find out how the salt concentration of the water affects carrot root cells.</p><div class='tbl'><table><thead><tr><th>Equipment available</th></tr></thead><tbody><tr><td>carrots · cork borer (1 cm diameter) · ruler · knife and white tile · sodium chloride (salt) solutions: 0, 0.5, 1.0, 1.5, 2.0 and 2.5% · boiling tubes and rack · 20 cm³ measuring cylinder · balance (0.01 g) · paper towels · forceps · stopwatch · marker pen · eye protection</td></tr></tbody></table></div>" },
      { type: "info", guide: {
        title: "Your criterion B checklist",
        intro: "Answer B1–B8 in order. Each one matches a mission from the skills workshop. Use the frames in the hints.",
        steps: [
          { h: "Research question and the problem", strand: "Strand i", what: "Four parts: independent variable + range, dependent variable, how it is measured, the tissue. Then explain why it matters, using osmosis.",
            starters: ["How does … (0–2.5%) affect … measured using …?", "Root cells take in water by osmosis, so…"] },
          { h: "Hypothesis", strand: "Strand ii", what: "Predict what happens at low AND high salt concentrations. Explain with the 4 osmosis steps.",
            starters: ["If the salt concentration is low, then…", "because the solution is hypotonic…"] },
          { h: "Variables and sufficient data", strand: "Strand iii", what: "Explain how you change the independent variable, how you measure the dependent variable, and how you keep each control variable the same.",
            starters: ["I will keep … the same by …, because…", "I will repeat each concentration 3 times so that…"] },
          { h: "Method and safety", strand: "Strand iv", what: "Numbered steps with amounts, sizes, time, instruments, repeats and safety.",
            starters: ["1. Put on eye protection because…", "2. Use the cork borer to cut…"] }
        ],
        ladder: [
          { lv: "1–2", verb: "States", d: "a question, a prediction and the variables" },
          { lv: "3–4", verb: "Outlines", d: "a question, a hypothesis with some science, and how variables are changed" },
          { lv: "5–6", verb: "Describes", d: "the question, a hypothesis with reasoning, and how sufficient data are collected" },
          { lv: "7–8", verb: "Explains", d: "the problem, a hypothesis with correct scientific reasoning, and every variable, with a complete, safe method" }
        ],
        checklist: ["Units with every measurement (%, g, cm³, min)", "The 4 osmosis steps in the hypothesis", "What + how + why for each control variable", "At least 3 repeats and a mean", "Safety: the hazard and the precaution"]
      } },

      { id: "w2b1", type: "text", marks: 2, minWords: 20,
        prompt: "<b>Formulate</b> a focused research question for this investigation.",
        hint: "How does <b>[independent variable + range]</b> affect the <b>[dependent variable]</b> of <b>[tissue + time]</b>, measured using <b>[instrument]</b>?",
        model: "How does the concentration of salt solution (0, 0.5, 1.0, 1.5, 2.0 and 2.5%) affect the percentage change in mass of carrot cylinders after 60 minutes, measured using a balance (0.01 g)?",
        points: ["Independent variable with its range (salt concentration 0–2.5%)", "Dependent variable and how it is measured (% change in mass, balance), with the tissue (carrot)"] },

      { id: "w2b2", type: "text", marks: 3, minWords: 30,
        prompt: "<b>Explain</b> why this question is worth investigating. Use scientific reasoning and the farmer's problem.",
        hint: "Carrot root cells take in water by … . If the soil water is too salty, … . This matters to the farmer because … . Finding the concentration where the cells neither gain nor lose water tells us … .",
        model: "Carrot root cells take in water from the soil by osmosis, and they need water to stay turgid so the carrot is firm (1). If the well water is too salty it becomes hypertonic to the root cells, so water leaves the cells by osmosis and the carrots become soft and bendy, which is what the farmer has seen (1). Finding the salt concentration at which the carrot neither gains nor loses mass tells the farmer the highest salt level the water can have before the crop is damaged, which matters in the UAE where groundwater is becoming saltier (1).",
        points: ["Root cells take in water by osmosis / need water to stay turgid", "Salty (hypertonic) water makes cells lose water → soft carrots", "Real-world value: safe salt level for irrigation / UAE groundwater"] },

      { id: "w2b3", type: "text", marks: 4, minWords: 45,
        prompt: "<b>Formulate</b> a testable hypothesis and <b>explain</b> it using scientific reasoning. Predict what happens at <b>low</b> and at <b>high</b> salt concentrations.",
        hint: "If the salt concentration is low (…%), then the carrot cylinders will … mass, because the solution is … compared with the cell sap, so the water concentration is … outside, and water moves … the cells by osmosis through the partially permeable membrane, so the cells become … . If the salt concentration is high (…%), then … .",
        model: "If the salt concentration is low (0–0.5%), then the carrot cylinders will gain mass, because the solution is hypotonic compared with the cell sap: the water concentration is higher outside the cells, so water moves into the cells by osmosis through the partially permeable membrane and the cells become turgid (2). If the salt concentration is high (1.5–2.5%), then the cylinders will lose mass, and lose more as the concentration increases, because the solution is hypertonic: the water concentration is lower outside, so water moves out of the cells by osmosis and the cells become plasmolysed (2).",
        points: ["Testable prediction for low concentration (gain mass)", "Testable prediction for high concentration (lose more mass as concentration increases)", "Reasoning: hypotonic / hypertonic and water concentration", "Reasoning: osmosis through a partially permeable membrane → turgid / plasmolysed"] },

      { id: "w2b4", type: "match", marks: 3,
        prompt: "<b>Identify</b> the variables and the measuring instrument.",
        head: ["Part of the plan", "In this investigation"],
        options: ["salt concentration", "percentage change in mass", "balance (0.01 g)", "measuring cylinder", "size of the carrot cylinders"],
        rows: [
          { label: "Independent variable", answer: "salt concentration" },
          { label: "Dependent variable", answer: "percentage change in mass" },
          { label: "Instrument used to measure the dependent variable", answer: "balance (0.01 g)" }
        ] },

      { id: "w2b5", type: "text", marks: 2, minWords: 25,
        prompt: "<b>Explain</b> how you will change the independent variable and how you will measure the dependent variable. Include units.",
        hint: "I will change the salt concentration by … . I will measure the dependent variable by weighing each cylinder … and … , then calculate % change = … .",
        model: "I will change the salt concentration by putting 20 cm³ of each salt solution (0, 0.5, 1.0, 1.5, 2.0 and 2.5%) into a labelled boiling tube, measured with a measuring cylinder (1). I will weigh each carrot cylinder on a balance (0.01 g) before and after 60 minutes in the solution, then calculate % change in mass = (end mass − start mass) ÷ start mass × 100 (1).",
        points: ["IV changed: 20 cm³ of each concentration in labelled tubes", "DV: mass before and after on a balance (g), converted to % change"] },

      { id: "w2b6", type: "text", marks: 3, minWords: 45,
        prompt: "<b>State</b> three control variables. For each one, <b>explain</b> how you will keep it the same and why.",
        hint: "Use this frame three times: I will keep <b>[control variable]</b> the same by <b>[exactly how]</b>, because <b>[how it would change the results]</b>.",
        model: "1. Size of the carrot cylinders: cut each one with the 1 cm cork borer and a ruler to 4 cm long, because a bigger cylinder has more surface area and would gain or lose more water (1). 2. Time in the solution: use a stopwatch and leave every cylinder for exactly 60 minutes, because a longer time lets more water move by osmosis (1). 3. Volume of solution: measure 20 cm³ into each tube with a measuring cylinder, so every cylinder is fully covered. (Also accept: blotting the same way, same carrot, same temperature.) (1)",
        points: ["Control 1 + how + why", "Control 2 + how + why", "Control 3 + how + why"] },

      { id: "w2b7", type: "text", marks: 2, minWords: 20,
        prompt: "<b>Explain</b> how you will collect <b>sufficient</b> data.",
        hint: "I will test … concentrations and repeat each one … times, so that … .",
        model: "I will test six salt concentrations (0–2.5%), which is enough to see the trend and where the line crosses zero (1). I will use three cylinders at each concentration and calculate a mean, so that I can spot and leave out any anomaly and the results are more reliable (1).",
        points: ["At least 5 concentrations to show the trend", "3 repeats at each concentration + mean, to spot anomalies"] },

      { id: "w2b8", type: "text", marks: 6, minWords: 80,
        prompt: "<b>Design</b> a method that another student could follow. Write numbered steps. Include safety.",
        hint: "1. Safety: … because … . 2. Label six boiling tubes … and add … cm³ of … . 3. Use the cork borer to cut … and trim each cylinder to … cm with … . 4. Blot each cylinder … and weigh it … . 5. Put … and start the stopwatch for … minutes. 6. Remove … , blot … and reweigh. 7. Repeat … times and calculate … .",
        model: "1. Put on eye protection, because salt solution stings the eyes. Cut on a white tile, away from your hand, because the knife is sharp. 2. Label six boiling tubes 0, 0.5, 1.0, 1.5, 2.0 and 2.5% and add 20 cm³ of the matching salt solution to each, using a measuring cylinder. 3. Use the 1 cm cork borer to cut six carrot cylinders and trim each one to 4 cm with a ruler. 4. Blot each cylinder by rolling it once on a paper towel, then weigh it on a balance (0.01 g) and record the start mass. 5. Put one cylinder into each tube and start the stopwatch for 60 minutes. 6. Remove each cylinder with forceps, blot it in the same way and record the end mass. 7. Repeat steps 2–6 twice more (3 cylinders per concentration) and calculate the mean % change in mass for each concentration. 8. Wipe up any spills and do not eat anything used in the lab.",
        points: ["Numbered, logical order", "Volumes and concentrations of solutions", "Cylinder size controlled (cork borer + ruler)", "Start and end mass on a balance, blotting the same way", "Time stated (stopwatch) and 3 repeats + mean", "Safety: hazard + precaution"] }
    ]
  },
  {
    crit: "C", name: "Processing and evaluating: the carrot results",
    tests: "Process, present and interpret real data from the carrot investigation, then judge the hypothesis and the method.",
    tip: "Keep the sign (+ or −) on every value. Quote numbers with units in your written answers.",
    items: [
      { type: "info",
        html: "<p>A scientist carried out the carrot investigation. Carrot cylinders were cut, blotted, weighed, left in 20 cm³ of each salt solution for 60 minutes, then blotted and weighed again. There were three trials at each concentration.</p><p><b>Scientist's notes:</b> the cylinders were cut with a knife to “about 4 cm” by eye. Different students blotted the cylinders, some pressing harder than others. The tubes were left on a sunny windowsill.</p>"
          + "<p><b>Raw data for two cylinders</b></p><div class='tbl'><table><thead><tr><th>Cylinder</th><th>Start mass (g)</th><th>End mass (g)</th></tr></thead><tbody><tr><td>X: 0%, trial 1</td><td>3.12</td><td>3.42</td></tr><tr><td>Y: 2.5%, trial 2</td><td>3.40</td><td>2.95</td></tr></tbody></table></div>"
          + "<p><b>Table 1: Percentage change in mass of carrot cylinders after 60 minutes in salt solutions</b></p><div class='tbl'><table><thead><tr><th>Salt concentration (%)</th><th>Trial 1 (%)</th><th>Trial 2 (%)</th><th>Trial 3 (%)</th></tr></thead><tbody><tr><td>0</td><td>X = ?</td><td>+10.2</td><td>+9.9</td></tr><tr><td>0.5</td><td>+4.5</td><td>+4.1</td><td>+4.9</td></tr><tr><td>1.0</td><td>−1.2</td><td>−0.8</td><td>−1.6</td></tr><tr><td>1.5</td><td>−6.1</td><td>−2.0</td><td>−6.5</td></tr><tr><td>2.0</td><td>−10.4</td><td>−9.8</td><td>−10.1</td></tr><tr><td>2.5</td><td>−12.6</td><td>Y = ?</td><td>−12.9</td></tr></tbody></table></div>" },
      { type: "info", guide: {
        title: "Your criterion C checklist",
        intro: "Answer C1–C11 in order. They follow missions 5, 6 and 7 of the skills workshop.",
        steps: [
          { h: "Process and present", strand: "Strand i", what: "Calculate with the sign, leave out the anomaly in the mean, choose an even scale with zero inside the graph, then plot accurately.",
            starters: ["% change = (end − start) ÷ start × 100", "Mean = (… + …) ÷ 2, leaving out the anomaly"] },
          { h: "Describe and explain", strand: "Strand ii", what: "Describe the trend with numbers from both ends and the zero crossing. Explain it with the 4 osmosis steps.",
            starters: ["As the salt concentration increased from 0% to 2.5%, …", "At 0% the solution was hypotonic, so…"] },
          { h: "Judge the hypothesis", strand: "Strand iii", what: "Say whether it is supported, partly supported or not supported, quoting data.",
            starters: ["The hypothesis is partly supported because…", "However, at 0.5% …"] },
          { h: "Evaluate and improve", strand: "Strands iv–v", what: "Limitation → effect → specific improvement. Then suggest an extension.",
            starters: ["One limitation was … This made the end mass …", "To improve this, I would…"] }
        ],
        ladder: [
          { lv: "1–2", verb: "States", d: "some values, a simple trend and a limitation" },
          { lv: "3–4", verb: "Outlines", d: "correct calculations, a trend with some science, and a basic improvement" },
          { lv: "5–6", verb: "Describes", d: "accurate data and graph, a trend with numbers, and limitations with improvements" },
          { lv: "7–8", verb: "Explains", d: "the results with correct osmosis reasoning, judges the hypothesis with data, and explains how each limitation affected the results" }
        ],
        checklist: ["Signs kept on every value (+ or −)", "Anomaly left out of the mean", "Numbers and units quoted in every description", "Limitation → effect → improvement for each point"]
      } },

      { id: "w2c1", type: "numtable", marks: 2,
        prompt: "<b>Calculate</b> the missing values X and Y (1 d.p.). Keep the sign.",
        howto: "Type the number to 1 decimal place. Type a minus sign (-) for a loss.",
        head: ["Cylinder", "% change in mass"],
        rows: [
          { label: "X (0%, trial 1)", answer: 9.6, tol: 0.05, hint: "(3.42 − 3.12) ÷ 3.12 × 100" },
          { label: "Y (2.5%, trial 2)", answer: -13.2, tol: 0.05, hint: "(2.95 − 3.40) ÷ 3.40 × 100" }
        ] },

      { id: "w2c2", type: "mcq", marks: 1,
        prompt: "<b>Identify</b> the anomalous result in Table 1.",
        options: ["0%, trial 2 (+10.2%)", "1.0%, trial 2 (−0.8%)", "1.5%, trial 2 (−2.0%)", "2.0%, trial 1 (−10.4%)"], answer: 2,
        explain: "−2.0% is far from the other two repeats at 1.5% (−6.1% and −6.5%) and does not fit the trend." },

      { id: "w2c3", type: "numtable", marks: 6,
        prompt: "<b>Calculate</b> the mean % change in mass for each concentration (1 d.p.). Use your values for X and Y, and leave out the anomaly.",
        howto: "Type the number to 1 decimal place. Type a minus sign (-) for a negative mean.",
        head: ["Salt concentration (%)", "Mean % change in mass"],
        rows: [
          { label: "0", answer: 9.9, tol: 0.05 },
          { label: "0.5", answer: 4.5, tol: 0.05 },
          { label: "1.0", answer: -1.2, tol: 0.05 },
          { label: "1.5", answer: -6.3, tol: 0.05, hint: "Leave out −2.0: (−6.1 + −6.5) ÷ 2" },
          { label: "2.0", answer: -10.1, tol: 0.05 },
          { label: "2.5", answer: -12.9, tol: 0.05 }
        ] },

      { id: "w2c4", type: "mcq", marks: 1,
        prompt: "Your means go from about +10% to about −13%. Which y-axis scale is best for the graph?",
        options: ["0% at the bottom to +10% at the top", "−15% to +15% in even steps of 5%, with the zero line inside the graph", "−13% to +10%, with steps of 2, 5 and 10", "+15% at the bottom to −15% at the top"], answer: 1,
        explain: "The scale must include every value, use even steps, and put zero inside the graph so the negative means can be plotted below it." },

      { id: "w2c5", type: "plot", marks: 6, tol: 0.6,
        prompt: "<b>Plot</b> your six means on the graph. Each small square on the y-axis is 1%.",
        title: "Mean % change in mass of carrot against salt concentration",
        xTitle: "Salt concentration (%)", yTitle: "Mean % change in mass (%)", xMin: 0, xMax: 2.5,
        yMin: -15, yMax: 15, yMajor: 5, yMinor: 1,
        points: [ { x: 0, y: 9.9, label: "0" }, { x: 0.5, y: 4.5, label: "0.5" }, { x: 1.0, y: -1.2, label: "1.0" }, { x: 1.5, y: -6.3, label: "1.5" }, { x: 2.0, y: -10.1, label: "2.0" }, { x: 2.5, y: -12.9, label: "2.5" } ] },

      { id: "w2c6", type: "text", marks: 3, minWords: 30,
        prompt: "<b>Describe</b> the trend shown by your graph. Use numbers from your means.",
        hint: "As the salt concentration increased from …% to …%, the mean % change in mass … from …% to …% . The cylinders gained mass at … and lost mass at … . The line crosses zero at about …% .",
        model: "As the salt concentration increased from 0% to 2.5%, the mean % change in mass decreased from +9.9% to −12.9% (1). The cylinders gained mass at 0% and 0.5% (+4.5%) but lost mass from 1.0% upwards (−1.2% at 1.0%) (1). The line crosses zero at about 0.9%, and the decrease becomes smaller at high concentrations (−10.1% to −12.9% between 2.0% and 2.5%) (1).",
        points: ["Negative trend with values from both ends (+9.9% to −12.9%)", "Gain at low concentrations, loss from 1.0% upwards", "Crosses zero at about 0.9% / levels off at high concentrations"] },

      { id: "w2c7", type: "num", marks: 2, min: 0.8, max: 1.0, unit: "%",
        prompt: "<b>Estimate</b> the salt concentration that is isotonic with the carrot cell sap (where the line crosses zero).",
        explain: "Zero lies between 0.5% (+4.5%) and 1.0% (−1.2%), much closer to 1.0%. Accept 0.8–1.0% (about 0.9%)." },

      { id: "w2c8", type: "text", marks: 4, minWords: 50,
        prompt: "<b>Explain</b> the results at <b>0%</b> and at <b>2.5%</b> salt, using scientific reasoning.",
        hint: "Use the 4 steps for each one. At 0%, the solution is … compared with the cell sap, so the water concentration is … outside; water moves … by osmosis through the partially permeable membrane, so the cells become … and the cylinder … mass. At 2.5%, … .",
        model: "At 0% (pure water) the solution was hypotonic compared with the carrot cell sap, so the water concentration was higher outside the cells (1). Water moved into the cells by osmosis through the partially permeable membrane, so the cells became turgid and the cylinders gained mass (+9.9%) (1). At 2.5% the solution was hypertonic, so the water concentration was lower outside the cells (1). Water moved out of the cells by osmosis, the vacuoles shrank and the cells became plasmolysed, so the cylinders lost mass (−12.9%) (1).",
        points: ["0%: hypotonic → higher water concentration outside", "0%: water in by osmosis through partially permeable membrane → turgid, gain mass", "2.5%: hypertonic → lower water concentration outside", "2.5%: water out by osmosis → plasmolysed, lose mass"] },

      { id: "w2c9", type: "text", marks: 3, minWords: 30,
        prompt: "A student's hypothesis was: <i>“Carrot cylinders will lose mass in every salt solution, and lose more as the salt concentration increases.”</i> <b>Discuss</b> whether the data supports this hypothesis.",
        hint: "The hypothesis is partly supported because … (quote data). However, … (quote data). So … .",
        model: "The hypothesis is partly supported: from 1.0% to 2.5% the cylinders lost mass, and lost more as the concentration increased (−1.2% to −12.9%) (1). However, at 0.5% salt the cylinders gained mass (+4.5%), so they did not lose mass in every salt solution, because 0.5% is still hypotonic to the cell sap (1). So the second part of the hypothesis is supported, but the first part is not: the carrot only loses mass above about 0.9% salt (1).",
        points: ["Supported part with data (loss increases from 1.0% to 2.5%)", "Not supported part with data (gain at 0.5%)", "Clear judgement: partly supported, linked to the isotonic point"] },

      { id: "w2c10", type: "text", marks: 4, minWords: 50,
        prompt: "Use the scientist's notes. <b>Evaluate</b> the method: describe <b>two</b> limitations, explain how each affected the results, and suggest a specific improvement for each.",
        hint: "Limitation 1: … . This affected the results because … . Improvement: … . Limitation 2: … .",
        model: "1. Different students blotted the cylinders with different pressure, so some cylinders kept more surface water and their end mass was too high; this may explain the −2.0% anomaly (1). Improvement: one person blots every cylinder by rolling it once on a paper towel (1). 2. The cylinders were cut to “about 4 cm” by eye, so they had different surface areas and different amounts of water moved in or out (1). Improvement: cut every cylinder with the cork borer and trim it to exactly 4.0 cm with a ruler. (Also accept: the windowsill changed the temperature, so use a water bath at 25 °C.) (1)",
        points: ["Limitation 1 (blotting) + effect on mass", "Specific improvement for limitation 1", "Limitation 2 (size by eye / temperature) + effect", "Specific improvement for limitation 2"] },

      { id: "w2c11", type: "text", marks: 2, minWords: 20,
        prompt: "<b>Suggest</b> one extension to this investigation that would help the farmer, and explain what data you would collect.",
        hint: "To find the isotonic point more precisely, I would … . OR: I would test … to see whether … .",
        model: "Test more concentrations between 0.5% and 1.0% (e.g. 0.6, 0.7, 0.8 and 0.9%) with three cylinders each, measuring % change in mass, to find the isotonic point more precisely (1). This tells the farmer more exactly the highest salt level the irrigation water can have before carrot cells start losing water (1). (Also accept: testing well water samples from the farm, or a different crop.)",
        points: ["A sensible new investigation (smaller intervals / farm water / other crops)", "Data to be collected and why it helps the farmer"] }
    ]
  }
  ]
},
{
  id: "w3",
  title: "Reflecting on science: saving lives with stem cells",
  topic: "Unit 1: Cells",
  lessons: "Unit 1 – Lessons 3–7 · criterion D practice",
  opens: "2026-11-16T07:00:00+04:00",
  due: "2026-11-22T23:59:00+04:00",
  minutes: 60,
  sections: [
  {
    crit: "R", name: "Skills workshop: how to write criterion D", short: "skills workshop",
    tests: "Step-by-step lessons on how to write each part of criterion D, with quick marked checks.",
    how: "Each mission teaches <b>one skill</b> for criterion D. Read the <b>Learn</b> card, then answer the <b>Check yourself</b> questions. Finish each mission to unlock the next one. You will use every skill in the stem cell task afterwards.",
    items: [
      /* ---------- Mission 1: what criterion D asks ---------- */
      { type: "info", mission: { n: 1, title: "What criterion D asks you to do", lesson: "Criterion D · all strands",
        story: "Criterion D is not about remembering facts. It asks how science is used to solve a real problem, and what that means for people, money and the planet." } },
      { type: "info", learn: { h: "The four strands of criterion D",
        html: "<div class='tbl'><table><thead><tr><th>Strand</th><th>What you must do</th><th>Typical question</th></tr></thead><tbody>"
          + "<tr><td><b>i</b></td><td>Explain <b>how science is applied</b> to solve a problem</td><td>“Describe how science has been applied to…”</td></tr>"
          + "<tr><td><b>ii</b></td><td>Discuss and evaluate the <b>implications</b> (effects) of using that science</td><td>“Describe one social advantage and one social disadvantage…”</td></tr>"
          + "<tr><td><b>iii</b></td><td>Use <b>scientific language</b> correctly and clearly</td><td>Marked in every answer</td></tr>"
          + "<tr><td><b>iv</b></td><td><b>Document your sources</b>: say where your evidence comes from</td><td>“Use evidence from the sources…”</td></tr></tbody></table></div>"
          + "<p><b>The command term tells you how much to write:</b></p><ul><li><b>Describe:</b> give a detailed account of what happens.</li><li><b>Explain:</b> give reasons (because…, so…).</li><li><b>Discuss:</b> give arguments for AND against, with evidence.</li><li><b>Evaluate:</b> weigh up the advantages and disadvantages, then make a judgement.</li><li><b>Justify:</b> give the evidence that supports your opinion.</li></ul>"
          + "<div class='mist'><b>Why students lose marks in D</b><ul><li>Only writing about one side (only advantages).</li><li>No evidence: no numbers or sources quoted.</li><li>No conclusion, or a conclusion with no reason.</li><li>Missing one of the bullet points in the question.</li></ul></div>" } },
      { id: "w3r1", type: "match", marks: 5,
        prompt: "Match each <b>command term</b> to what it asks you to do.",
        head: ["Command term", "What you must do"],
        options: ["Give a detailed account of what happens", "Give reasons: say why or how", "Give arguments for and against, with evidence", "Weigh up advantages and disadvantages, then make a judgement", "Give evidence that supports your opinion"],
        rows: [
          { label: "Describe", answer: "Give a detailed account of what happens" },
          { label: "Explain", answer: "Give reasons: say why or how" },
          { label: "Discuss", answer: "Give arguments for and against, with evidence" },
          { label: "Evaluate", answer: "Weigh up advantages and disadvantages, then make a judgement" },
          { label: "Justify", answer: "Give evidence that supports your opinion" }
        ] },
      { type: "info", exam: "<b>In the eAssessment</b>, criterion D questions usually come at the end and carry the most marks. The last question is often worth 8–13 marks and lists bullet points. <b>Every bullet point is worth marks</b>, so tick them off as you write." },

      /* ---------- Mission 2: how science is applied ---------- */
      { type: "info", mission: { n: 2, title: "Explain how science is applied", lesson: "Criterion D · strand i",
        story: "Before you discuss whether something is good or bad, show that you understand how the science works and how it solves the problem." } },
      { type: "info", learn: { h: "Problem → science → how it works → how it solves the problem",
        html: "<div class='frame'><span class='p1'>The problem is…</span> <span class='p2'>Scientists use… [the technology or treatment]</span>. <span class='p3'>It works because… [link to what you learned in class]</span>. <span class='p4'>This solves the problem because…</span></div>"
          + "<div class='wex'><b>Worked example: oral rehydration solution (ORS)</b><span class='p1'>The problem is that diarrhoea makes the body lose a lot of water and salts, which can be deadly for young children.</span> <span class='p2'>Doctors use oral rehydration solution: clean water with salts and glucose dissolved in it.</span> <span class='p3'>It works because glucose and sodium are absorbed into the cells lining the small intestine. This raises the solute concentration inside the cells, so water follows them into the cells by osmosis.</span> <span class='p4'>This solves the problem because the patient takes back the water and salts they lost, without needing a hospital drip.</span></div>"
          + "<div class='mist'><b>Not good enough</b><ul><li>“<i>ORS helps sick children.</i>” No science and no explanation.</li><li>“<i>ORS has salt and sugar in it.</i>” It says what ORS is, but not how it works or how it solves the problem.</li></ul></div>" } },
      { id: "w3r2", type: "cloze", marks: 6,
        prompt: "Complete the explanation of how oral rehydration solution works.",
        text: "Diarrhoea makes the body lose [[0]] and salts. ORS is water with salts and [[1]] dissolved in it. Glucose and sodium are absorbed into the cells lining the [[2]]. This makes the solute concentration inside the cells [[3]], so the water concentration inside is [[4]]. Water follows into the cells by [[5]], so the patient is rehydrated.",
        options: ["water", "oxygen", "glucose", "starch", "small intestine", "stomach", "higher", "lower", "osmosis", "active transport"],
        blanks: ["water", "glucose", "small intestine", "higher", "lower", "osmosis"] },
      { id: "w3r3", type: "mcq", marks: 1,
        prompt: "Which answer best <b>explains how science is applied</b> in a hospital drip?",
        options: ["Drips are used in hospitals to help patients.", "A drip contains 0.9% salt solution, which is safe.", "Dehydrated patients need water quickly. A drip puts 0.9% salt solution straight into the blood. It is isotonic with red blood cells, so there is no net movement of water and the cells keep their shape, but the blood volume is restored.", "Pure water would make red blood cells burst."], answer: 2,
        explain: "It has all four parts: the problem (dehydration), the science used (0.9% salt drip), how it works (isotonic, so there is no net osmosis) and how it solves the problem (restores blood volume safely)." },
      { type: "info", exam: "<b>In the eAssessment</b> this appears as “<b>Describe</b> the ways in which science has been applied to…” (usually 3–4 marks). Use the 4-part frame and include at least one key science word from class, such as <i>osmosis</i>, <i>partially permeable membrane</i>, <i>stem cell</i> or <i>differentiate</i>." },

      /* ---------- Mission 3: implications ---------- */
      { type: "info", mission: { n: 3, title: "Implications: advantages and disadvantages", lesson: "Criterion D · strand ii",
        story: "Every use of science has effects beyond the lab. Examiners want you to sort them into types and explain each one fully." } },
      { type: "info", learn: { h: "Sort the effects, then develop each point",
        html: "<div class='tbl'><table><thead><tr><th>Type of implication</th><th>Ask yourself</th></tr></thead><tbody>"
          + "<tr><td><b>Social</b></td><td>How does it affect people's daily lives, health and communities?</td></tr>"
          + "<tr><td><b>Economic</b></td><td>What does it cost? Who pays? Does it save or make money?</td></tr>"
          + "<tr><td><b>Environmental</b></td><td>How does it affect living things, energy use, pollution and the climate?</td></tr>"
          + "<tr><td><b>Ethical</b></td><td>Is it fair and right? Who benefits and who might be harmed?</td></tr></tbody></table></div>"
          + "<p><b>Develop every point with P-E-C:</b></p><div class='frame'><span class='p1'>Point:</span> one advantage or disadvantage. <span class='p2'>Evidence:</span> a fact or number from a source. <span class='p3'>Consequence:</span> “This means that…” say why it matters.</div>"
          + "<div class='wex'><b>Worked example: economic advantage of ORS</b><span class='p1'>ORS is very cheap to make,</span> <span class='p2'>because it only needs clean water, salt and sugar.</span> <span class='p3'>This means that poor families can treat their children at home, without paying for hospital care.</span></div>"
          + "<div class='mist'><b>Too short for marks</b><ul><li>“<i>It is cheap.</i>” This is a point with no evidence and no consequence.</li><li>“<i>It is bad for the environment.</i>” How? What is the evidence?</li></ul></div>" } },
      { id: "w3r4", type: "match", marks: 4,
        prompt: "<b>Identify</b> the type of implication for each statement about ORS.",
        head: ["Statement", "Type of implication"],
        options: ["social", "economic", "environmental", "ethical"],
        rows: [
          { label: "A packet of ORS costs very little, so poor families can afford it.", answer: "economic" },
          { label: "Parents can give ORS at home, so children do not have to stay in hospital away from their family.", answer: "social" },
          { label: "Millions of plastic ORS sachets add to plastic waste.", answer: "environmental" },
          { label: "Every child should have equal access to a treatment that can save their life.", answer: "ethical" }
        ] },
      { id: "w3r5", type: "mcq", marks: 1,
        prompt: "Which point about hospital drips is <b>fully developed</b> (point + evidence + consequence)?",
        options: ["Drips are expensive.", "Drips are good for patients.", "Drips need trained nurses and sterile equipment, which cost money, so treating dehydration with a drip is much more expensive than with ORS, and some clinics cannot afford it.", "Drips use 0.9% salt."], answer: 2,
        explain: "It makes a point (drips are expensive), gives evidence of why (nurses and sterile equipment) and states a consequence (some clinics cannot afford them)." },
      { type: "info", exam: "<b>In the eAssessment</b> this appears as “<b>Describe</b> one social advantage and one social disadvantage…” (usually 3 marks each). That's two separate P-E-C points: one for, one against." },

      /* ---------- Mission 4: evidence and sources ---------- */
      { type: "info", mission: { n: 4, title: "Use evidence and document your sources", lesson: "Criterion D · strands iii and iv",
        story: "An opinion without evidence gets few marks. Show where your facts come from, and give numbers with units." } },
      { type: "info", learn: { h: "Quote it, then cite it",
        html: "<ol class='steps'><li><b>Quote a number or fact</b> with its unit: “lost 12.9% of their mass”.</li><li><b>Say where it comes from</b>: “Source B shows…” or “According to the World Health Organization (2024)…”.</li><li><b>Explain what it means</b> for your argument: “…so this means that…”.</li></ol>"
          + "<div class='wex'><b>Worked example: using your own carrot data from Pack 2</b>The carrot results show that carrot cylinders lost 12.9% of their mass in 2.5% salt solution. This means that watering crops with very salty well water could pull water out of the root cells by osmosis and damage the crop.</div>"
          + "<p><b>Strand iv: documenting a source.</b> A reference gives the <b>author</b>, the <b>year</b>, the <b>title</b>, and <b>where</b> it was published (a journal, website or newspaper):</p><div class='frame'>World Health Organization (2024). <i>Diarrhoeal disease</i> (fact sheet). www.who.int</div>"
          + "<div class='mist'><b>Not good enough</b><ul><li>“<i>Google says…</i>” or “<i>the internet</i>”: that is not a source.</li><li>A number with no unit: “it lost 12.9” — 12.9 what?</li></ul></div>" } },
      { id: "w3r6", type: "mcq", marks: 1,
        prompt: "Which sentence uses <b>evidence</b> best?",
        options: ["Salty water is bad for crops.", "Salty water is bad for crops because of osmosis.", "Our Pack 2 results show that carrot cylinders lost 12.9% of their mass in 2.5% salt solution, so irrigating with very salty water could make crops lose water by osmosis and wilt.", "I think farmers should not use salty water."], answer: 2,
        explain: "It quotes a number with its unit, says where the number comes from, and explains what it means." },
      { id: "w3r7", type: "match", marks: 4,
        prompt: "<b>Identify</b> each part of this reference: <i>World Health Organization (2024). Diarrhoeal disease (fact sheet). www.who.int</i>",
        head: ["Part of the reference", "What it is"],
        options: ["the author", "the year", "the title", "where it was published"],
        rows: [
          { label: "World Health Organization", answer: "the author" },
          { label: "(2024)", answer: "the year" },
          { label: "Diarrhoeal disease (fact sheet)", answer: "the title" },
          { label: "www.who.int", answer: "where it was published" }
        ] },
      { type: "info", exam: "<b>In the eAssessment</b>, questions say “Use evidence from the sources” or “Using information from this task and your wider MYP studies…”. Name the source each time you use it, e.g. “Source C shows…”." },

      /* ---------- Mission 5: discuss, evaluate, conclude ---------- */
      { type: "info", mission: { n: 5, title: "Discuss, evaluate and conclude", lesson: "Criterion D · strand ii",
        story: "The big question at the end needs a plan. Without one, students run out of time or forget a bullet point." } },
      { type: "info", learn: { h: "Plan the long answer in 5 steps",
        html: "<ol class='steps'><li><b>Introduce:</b> what is the issue, and what science is used? (1–2 sentences)</li><li><b>Advantages:</b> P-E-C for each bullet point in the question (social, economic, environmental…).</li><li><b>Disadvantages:</b> P-E-C for each bullet point.</li><li><b>Weigh them up:</b> which points matter most, and why? Use “However…”, “On the other hand…”, “This is more important because…”.</li><li><b>Conclude:</b> give your judgement, the main reason for it, and a recommendation or condition.</li></ol>"
          + "<div class='frame'>Overall, I think <span class='p1'>[your judgement]</span>, because <span class='p2'>[the strongest evidence]</span>. However, <span class='p3'>[the main problem]</span>, so <span class='p4'>[a recommendation that reduces the problem]</span>.</div>"
          + "<div class='wex'><b>Worked example conclusion: ORS</b>Overall, I think ORS should be the first treatment for dehydrated children, because it is cheap and can be given at home, which saves lives where hospitals are far away. However, it only works if families have clean water, so governments should provide clean water and ORS packets together.</div>"
          + "<div class='mist'><b>Weak conclusions</b><ul><li>“<i>In conclusion, there are advantages and disadvantages.</i>” There's no judgement.</li><li>“<i>I think it is good.</i>” There's no reason and no recommendation.</li></ul></div>" } },
      { id: "w3r8", type: "match", marks: 5,
        prompt: "Put the plan for a long criterion D answer in the right order.",
        head: ["Step", "What to write"],
        options: ["Introduce the issue and the science used", "Advantages, each with evidence", "Disadvantages, each with evidence", "Weigh them up: which matter most, and why", "Conclusion: judgement, reason and recommendation"],
        rows: [
          { label: "Step 1", answer: "Introduce the issue and the science used" },
          { label: "Step 2", answer: "Advantages, each with evidence" },
          { label: "Step 3", answer: "Disadvantages, each with evidence" },
          { label: "Step 4", answer: "Weigh them up: which matter most, and why" },
          { label: "Step 5", answer: "Conclusion: judgement, reason and recommendation" }
        ] },
      { id: "w3r9", type: "mcq", marks: 1,
        prompt: "Which is the best <b>conclusion</b>?",
        options: ["In conclusion, there are advantages and disadvantages.", "I think drips are good.", "Overall, drips should be used for severely dehydrated patients, because they work fastest when a patient cannot drink. However, they are expensive and need trained staff, so ORS should be used first for mild cases.", "Drips use 0.9% salt solution because it is isotonic."], answer: 2,
        explain: "It gives a clear judgement, the main reason, the main problem, and a recommendation." },
      { type: "info", exam: "<b>In the eAssessment</b> this is the last and biggest question: “<b>Discuss and evaluate</b>…” with bullet points (8–13 marks). Markschemes give marks for each bullet point, plus marks for a clear structure and a balanced, justified conclusion." }
    ]
  },
  {
    crit: "D", name: "Reflecting on the impacts of science: saving lives with stem cells",
    tests: "Use the skills workshop to explain how cord blood stem cells treat blood diseases, and discuss whether UAE families should bank or donate their baby's cord blood.",
    tip: "Name the source every time you use a fact (“Source C shows…”). Answer every bullet point, look at both sides, and end with a justified conclusion.",
    items: [
      { type: "info",
        html: "<p>This task is set in the global context of <b>identities and relationships</b>. When a baby is born, the blood left in the umbilical cord is usually thrown away. But this <b>cord blood</b> is full of <b>stem cells</b>, which can be used to treat serious blood diseases. In the UAE, parents can <b>donate</b> it to a public bank for anyone to use, or <b>pay</b> to store it privately for their own family. Study Sources A–D, then answer D1–D9.</p>"
          + "<p><b>Source A: How stem cells from cord blood treat blood diseases</b></p>"
          + "<svg viewBox='0 0 640 230' role='img' aria-label='Diagram: a stem cell divides to make more stem cells, and differentiates into specialised cells: red blood cells, white blood cells and platelets' style='width:100%;max-width:640px;height:auto;display:block;margin:6px 0 10px'>"
          + "<circle cx='110' cy='115' r='42' fill='#8e6bbf' fill-opacity='.25' stroke='#8e6bbf' stroke-width='3'/><circle cx='110' cy='115' r='14' fill='#8e6bbf'/>"
          + "<text x='110' y='185' text-anchor='middle' font-size='14' font-weight='700' fill='currentColor'>stem cell</text><text x='110' y='203' text-anchor='middle' font-size='12' fill='currentColor'>(unspecialised)</text>"
          + "<path d='M70 70 C 60 20, 160 20, 150 70' fill='none' stroke='currentColor' stroke-width='2'/><path d='M144 64 L151 74 L156 62 Z' fill='currentColor'/><text x='110' y='22' text-anchor='middle' font-size='12' fill='currentColor'>divides to make more stem cells</text>"
          + "<g stroke='currentColor' stroke-width='2.5' fill='currentColor'><line x1='160' y1='105' x2='300' y2='50'/><path d='M300 43 L314 47 L303 57 Z'/><line x1='160' y1='115' x2='300' y2='115'/><path d='M300 108 L314 115 L300 122 Z'/><line x1='160' y1='125' x2='300' y2='180'/><path d='M303 173 L314 183 L300 187 Z'/></g>"
          + "<text x='235' y='100' text-anchor='middle' font-size='12' fill='currentColor'>differentiates</text>"
          + "<ellipse cx='350' cy='48' rx='28' ry='18' fill='#c0392b' fill-opacity='.85'/><ellipse cx='350' cy='48' rx='12' ry='6' fill='#ffffff' fill-opacity='.35'/><text x='390' y='53' font-size='14' fill='currentColor'>red blood cell: carries oxygen</text>"
          + "<circle cx='350' cy='115' r='22' fill='#2f7fb8' fill-opacity='.3' stroke='#2f7fb8' stroke-width='2.5'/><path d='M340 108 q10 -10 20 0 q-8 6 0 14 q-10 8 -20 0 q8 -6 0 -14' fill='#2f7fb8'/><text x='390' y='120' font-size='14' fill='currentColor'>white blood cell: fights infection</text>"
          + "<g fill='#b8860b'><circle cx='340' cy='182' r='6'/><circle cx='356' cy='176' r='5'/><circle cx='358' cy='191' r='6'/></g><text x='390' y='187' font-size='14' fill='currentColor'>platelets: help blood to clot</text>"
          + "</svg>"
          + "<p>A <b>stem cell</b> is an unspecialised cell. It can divide to make more stem cells, and it can <b>differentiate</b> (become specialised) into other types of cell. Stem cells from cord blood can become red blood cells, white blood cells and platelets. In a <b>stem cell transplant</b>, healthy stem cells from a matching donor are put into the patient's blood. They settle in the bone marrow and start making healthy blood cells to replace the faulty ones. Cord blood stem cells can be used to treat <b>more than 80 diseases</b>, including leukaemia, thalassaemia and sickle cell anaemia.</p>"
          + "<p class='note'>Sources: Dubai Media Office (2020); Abu Dhabi Media Office (2025).</p>"
          + "<p><b>Source B: Thalassaemia in the UAE</b></p><ul><li>Thalassaemia is an <b>inherited</b> blood disorder: the body cannot make enough healthy haemoglobin, the protein in red blood cells that carries oxygen. Many patients need blood transfusions every few weeks for life.</li><li>At least <b>8.5%</b> of the UAE population carry the gene for thalassaemia, often without knowing.</li><li>If both parents are carriers, each child has a <b>25%</b> chance of being born with the disease.</li><li>A <b>stem cell (bone marrow) transplant</b> is the only treatment that can cure thalassaemia.</li></ul>"
          + "<p class='note'>Sources: Khaleej Times (2023), quoting the UAE Ministry of Health and Prevention; The National (2016).</p>"
          + "<p><b>Source C: Two ways to store cord blood in the UAE</b></p><div class='tbl'><table><thead><tr><th></th><th>Public bank (donation)</th><th>Private (family) bank</th></tr></thead><tbody>"
          + "<tr><td>Who can use it?</td><td>Any patient who is a good match</td><td>Only the baby and their family</td></tr>"
          + "<tr><td>Cost to the family</td><td>Free</td><td>AED 9,000 at the government centre in Dubai; AED 20,000–38,000 at other private banks</td></tr>"
          + "<tr><td>How long it is stored</td><td>Up to 30 years</td><td>Up to 30 years</td></tr></tbody></table></div>"
          + "<p>The Dubai Cord Blood and Research Centre (opened 2006) offers both. By 2020 it had stored about <b>8,000</b> cord blood units, and <b>20 patients</b> had been treated with them for diseases including thalassaemia, sickle cell anaemia and leukaemia. The centre wants more families to donate, to build a public registry with the <b>many different ethnic groups</b> living in the UAE, because transplants work best when donor and patient are a close match.</p>"
          + "<p class='note'>Sources: Dubai Health Authority (2021). DCRC service catalogue; Dubai Media Office (2020); Aletihad (2025).</p>"
          + "<p><b>Source D: What doctors' organisations say</b></p><ul><li>The chance that a child will ever need their <b>own</b> stored cord blood is estimated at between <b>1 in 400 and 1 in 200,000</b>.</li><li>A child's own cord blood usually <b>cannot</b> treat an inherited disease such as thalassaemia, because their stem cells carry the same faulty gene. A healthy, matching donor is needed instead.</li><li>The American Academy of Pediatrics <b>encourages</b> parents to donate cord blood to public banks. It advises private banking only when an older brother or sister already has a disease that cord blood could treat.</li><li>Worldwide, more than <b>60,000</b> transplants have been carried out using cord blood stem cells.</li></ul>"
          + "<p class='note'>Sources: American Academy of Pediatrics, reported by WebMD (n.d.) and NewYork-Presbyterian (2007); WAM (2025).</p>" },
      { type: "info", guide: {
        title: "Your criterion D checklist",
        intro: "Answer D1–D9 in order. They follow the five missions of the skills workshop.",
        steps: [
          { h: "How the science is applied", strand: "Strand i", what: "Problem → science → how it works (stem cells divide and differentiate) → how it solves the problem.",
            starters: ["The problem is that thalassaemia…", "Stem cells are unspecialised, so…"] },
          { h: "Implications", strand: "Strand ii", what: "For each type asked (economic, social, ethical): one advantage and one disadvantage, each with Point + Evidence + Consequence.",
            starters: ["One economic advantage is… Source C shows…", "This means that…"] },
          { h: "Evidence and sources", strand: "Strands iii–iv", what: "Quote numbers and name the source every time. Use key science words correctly: stem cell, differentiate, specialised, transplant, inherited.",
            starters: ["Source B shows that…", "According to the American Academy of Pediatrics…"] },
          { h: "Discuss, evaluate, conclude", strand: "Strand ii", what: "Plan in 5 steps. Weigh up the points, then give a judgement, the main reason and a recommendation.",
            starters: ["On the other hand…", "Overall, I think…, because… However…, so…"] }
        ],
        ladder: [
          { lv: "1–2", verb: "Outlines", d: "how stem cells are used, and states an implication" },
          { lv: "3–4", verb: "Summarizes", d: "how stem cells are used, with one or two implications, and some evidence" },
          { lv: "5–6", verb: "Describes", d: "how stem cell transplants solve the problem and describes implications on both sides, with sources" },
          { lv: "7–8", verb: "Explains", d: "how the science works, discusses and evaluates several implications with evidence, and reaches a justified conclusion" }
        ],
        checklist: ["Key science words: stem cell, unspecialised, differentiate, specialised cell, transplant", "Both sides for every implication", "A number and a source name in every paragraph", "A conclusion with a judgement, a reason and a recommendation"]
      } },

      { id: "w3d1", type: "mcq", marks: 1,
        prompt: "Which property makes stem cells useful for treating blood diseases (Source A)?",
        options: ["They are already specialised red blood cells.", "They are unspecialised and can divide and differentiate into different types of blood cell.", "They can carry more oxygen than red blood cells.", "They kill the bacteria that cause the disease."], answer: 1,
        explain: "Stem cells are unspecialised. They can divide to make more cells and differentiate into specialised cells such as red blood cells, white blood cells and platelets." },

      { id: "w3d2", type: "text", marks: 3, minWords: 45,
        prompt: "<b>Describe</b> the ways in which science has been applied to treat thalassaemia using cord blood stem cells. Use Sources A and B.",
        hint: "The problem is that people with thalassaemia … (Source B). Doctors use a stem cell transplant: healthy stem cells from … are put into … . Stem cells are … , so they can … and … into … . This solves the problem because … .",
        model: "Thalassaemia is an inherited disorder in which the body cannot make enough healthy haemoglobin, so patients need blood transfusions every few weeks (Source B) (1). In a stem cell transplant, healthy stem cells from a matching donor's cord blood are put into the patient's blood and settle in the bone marrow (1). Because stem cells are unspecialised, they can divide and differentiate into healthy red blood cells that make normal haemoglobin, so the patient no longer needs transfusions. Source B says a transplant is the only treatment that can cure thalassaemia (1).",
        points: ["The problem: thalassaemia, not enough healthy haemoglobin / transfusions (Source B)", "Transplant of healthy matching donor stem cells into the patient", "Stem cells divide and differentiate into healthy red blood cells → cure"] },

      { id: "w3d3", type: "text", marks: 2, minWords: 30,
        prompt: "Use Source D. <b>Explain</b> why a child born with thalassaemia usually cannot be cured with their <b>own</b> stored cord blood, but can be helped by cord blood from a healthy donor.",
        hint: "Thalassaemia is … , so the child's own stem cells carry … . If these cells differentiated into red blood cells, they would … . A healthy donor's stem cells … .",
        model: "Thalassaemia is inherited, so every cell in the child's body, including the stem cells in their own cord blood, carries the same faulty gene. If those stem cells were transplanted back, the red blood cells they make would still not produce enough healthy haemoglobin (1). Stem cells from a healthy, matching donor do not carry the fault, so the red blood cells they differentiate into make normal haemoglobin (1).",
        points: ["Own stem cells carry the same faulty gene → still make faulty red blood cells", "Healthy donor's stem cells → normal red blood cells / haemoglobin"] },

      { id: "w3d4", type: "num", marks: 1, min: 0.25, max: 0.25, unit: "%",
        prompt: "Source D says the chance that a child will ever need their own cord blood is at best <b>1 in 400</b>. <b>Calculate</b> this as a percentage.",
        explain: "1 ÷ 400 × 100 = 0.25%. Even the most hopeful estimate means that 399 out of every 400 privately stored units will never be used by that child." },

      { id: "w3d5", type: "text", marks: 3, minWords: 45,
        prompt: "<b>Describe</b> one <b>economic</b> advantage and one <b>economic</b> disadvantage of a family paying to store their baby's cord blood in a private bank.",
        hint: "Advantage: If a family member ever needs a transplant, … (Source B: transfusions every few weeks for life). This means that … . Disadvantage: Private banking costs … (Source C), but Source D shows … . This means that … .",
        model: "An economic advantage is that if a brother or sister develops a disease that cord blood can treat, the family already has stem cells ready, which could avoid years of expensive treatment such as blood transfusions every few weeks for life (Source B). A transplant could save the family a lot of money in the long term (1.5). An economic disadvantage is that private banking costs AED 9,000 to AED 38,000 (Source C), and Source D shows there is only a 1 in 400 to 1 in 200,000 chance that the child will ever use it. So most families pay a lot of money for something they will never need (1.5).",
        points: ["Advantage with evidence: avoids costly long-term treatment if needed (Source B)", "Disadvantage with evidence: AED 9,000–38,000 (Source C) for a very small chance of use (Source D)", "Consequence of each for the family"] },

      { id: "w3d6", type: "text", marks: 3, minWords: 40,
        prompt: "<b>Describe</b> one <b>social</b> advantage and one <b>social</b> disadvantage of the UAE encouraging more parents to <b>donate</b> cord blood to public banks.",
        hint: "Advantage: The UAE has many different … (Source C), and transplants work best when … . This means that … . Disadvantage: If parents donate, … (Source C: who can use it). This means that … .",
        model: "A social advantage is that more donations would build a larger public registry with the many different ethnic groups that live in the UAE (Source C). Transplants work best when donor and patient are a close match, so more patients from every community, for example children with thalassaemia, could find a donor and be cured (1.5). A social disadvantage is that donated cord blood can be used by any patient, not by the family (Source C). If a brother or sister later needs a transplant, the family cannot reserve their own baby's cord blood, which could cause worry and regret (1.5).",
        points: ["Advantage with evidence: diverse registry / more matches for UAE patients (Source C)", "Disadvantage with evidence: family cannot reserve donated unit (Source C)", "Consequence of each for people / communities"] },

      { id: "w3d7", type: "text", marks: 3, minWords: 40,
        prompt: "<b>Describe</b> one <b>ethical</b> concern about <b>private</b> cord blood banking. (Ethical means whether something is fair and right.)",
        hint: "Is it fair that … (Source C: cost)? OR Is it right that companies sell … when Source D shows … ? This means that … .",
        model: "One ethical concern is fairness: private banking costs up to AED 38,000 (Source C), so only richer families can afford to keep stem cells for their children, while poorer families cannot (1). Another concern is honesty: private banks may sell storage to worried parents as “insurance”, even though Source D shows the chance of a child using their own cord blood is at best 1 in 400 and it usually cannot treat inherited diseases (1). Meanwhile, stem cells that could have saved another patient's life sit unused in a private bank (1).",
        points: ["Fairness: only wealthy families can afford it (Source C)", "Honesty / pressure on worried parents vs the real chance of use (Source D)", "Wasted cells that could save others"] },

      { id: "w3d8", type: "mcq", marks: 1,
        prompt: "Which of these is a correctly <b>documented</b> source (strand iv)?",
        options: ["A website about cord blood", "Dubai Health Authority (2021). Dubai Cord Blood and Research Centre service catalogue. dha.gov.ae", "Dubai (2021)", "Google search: cord blood UAE"], answer: 1,
        explain: "A reference needs the author (or organisation), the year, the title and where it was published." },

      { id: "w3d9", type: "text", marks: 8, minWords: 180,
        prompt: "Some people think the UAE should encourage all parents to <b>donate</b> their baby's cord blood to a public bank, instead of paying to store it privately. Using information from this task and your wider MYP studies, <b>discuss and evaluate</b> this idea. In your answer, include:<ul><li>how cord blood stem cells can be used to treat blood diseases such as thalassaemia</li><li>the economic implications</li><li>the social implications</li><li>an ethical implication</li><li>a concluding statement that justifies your opinion, with one recommendation</li></ul>",
        hint: "Use the 5-step plan. <b>1</b> Introduce: cord blood contains stem cells that… Thalassaemia is… <b>2</b> Advantages of donating, with evidence: Source C shows… This means that… <b>3</b> Disadvantages, with evidence: However, … <b>4</b> Weigh them up: The most important point is… because… <b>5</b> Conclude: Overall, I think…, because… However…, so I recommend…",
        model: "Cord blood contains stem cells, which are unspecialised and can divide and differentiate into red blood cells, white blood cells and platelets (Source A). In a transplant, healthy donor stem cells replace a patient's faulty blood-making cells. This matters in the UAE, where at least 8.5% of people carry the thalassaemia gene and a transplant is the only cure (Source B) (1).\n\nEconomic: donating is free, while private storage costs AED 9,000 to AED 38,000 (Source C), and the chance a child will ever use their own cord blood is only 1 in 400 to 1 in 200,000 (Source D). So most families who bank privately spend a lot on something they will never use (1). However, a family with an older child who already has a treatable disease could save the cost of years of transfusions by keeping a sibling's cord blood (1).\n\nSocial: more donations would build a public registry that includes the many ethnic groups in the UAE (Source C), and transplants work best with a close match, so more patients in every community could find a donor (1). On the other hand, once it is donated, the family cannot reserve the cord blood for their own children, which may worry parents (1).\n\nEthical: public banking is fairer, because any patient can benefit, not only families who can pay. A child's own cord blood usually cannot treat an inherited disease anyway, because it carries the same faulty gene (Source D) (1).\n\nWeighing these up, the benefits of donation reach many patients, while the benefit of private banking reaches very few. Overall, I think the UAE should encourage parents to donate, because it is free and gives far more patients, especially those with thalassaemia, a real chance of a cure (1). However, families with a sick child need their own option, so I recommend free family storage for those families, as the American Academy of Pediatrics advises, and public donation for everyone else (1).",
        points: ["How stem cells (unspecialised, differentiate) treat thalassaemia, with Source A/B evidence", "Economic: free donation vs AED 9,000–38,000 for a 1 in 400–200,000 chance (Sources C, D)", "Economic counter-point: families with an affected child", "Social advantage: diverse UAE registry / more matches (Source C)", "Social disadvantage: family cannot reserve the unit", "Ethical implication: fairness / own cells carry the same faulty gene (Source D)", "Points weighed up: balanced evaluation", "Justified conclusion with a recommendation"] }
    ]
  }
  ]
}


];

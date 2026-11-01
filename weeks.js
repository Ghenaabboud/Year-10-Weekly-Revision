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
}

];

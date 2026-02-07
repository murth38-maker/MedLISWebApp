// apps.js
document.addEventListener('DOMContentLoaded', () => {
  // -----------------------------
  // Heading styling + logo
  // -----------------------------
  const heading = document.querySelector('h1');
  if (heading) {
    Object.assign(heading.style, {
      fontFamily: 'Segoe UI, sans-serif',
      fontSize: '3em',
      color: '#000080',
      textAlign: 'center',
      letterSpacing: '2px',
      textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
      marginBottom: '20px',
      borderBottom: 'none'
    });

    heading.textContent = '(Applications)';

    const logoImg = document.createElement('img');
    logoImg.src = 'images/medlis-logo.png';
    logoImg.alt = 'MedLIS Logo';
    Object.assign(logoImg.style, {
      height: '80px',
      verticalAlign: 'middle',
      marginRight: '12px'
    });

    const headerContainer = document.createElement('div');
    Object.assign(headerContainer.style, {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      paddingTop: '16px'
    });

    heading.parentNode.insertBefore(headerContainer, heading);
    headerContainer.appendChild(logoImg);
    headerContainer.appendChild(heading);
    heading.textContent = '(Applications)';
  }

  // -----------------------------
  // Define applications
  // -----------------------------
  const apps = [
    {
      name: "PowerChart",
      description: "Order communications solution for electronic ordering of laboratory tests. Can be used by laboratory staff to see who has reviewed a result if it has been amended",
      
      qrg: "documents_qpulse/QRG_Coming_Soon.pdf",
      qrgLabel: "PowerChart Navigation",
      sourceHref: "documents_qpulse/QRG_Coming_Soon.pdf",
      sourceLabel: "Common Services - All about the AppBar",
	  
      image: "powerchart.png",
      moreInfo: "<span style='font-size: 1.6em;'><strong>\"PowerChart\"</strong> MedLIS PowerChart is designed to address the needs of those requesting laboratory tests from within a hospital setting.  A clinician may order laboratory tests to be taken immediately, on a phlebotomy run or for future collection. Results from the laboratory tests can be viewed from the clinician’s inbox, the results flowsheet or the MedLIS Summary page (Def: Q-Pulse)<br><br><strong>Example Scenario:</strong> A junior doctor on a medical ward uses \"PowerChart\" to order a CRP and blood culture for a patient with suspected sepsis. The results are later viewed in the same system and used to guide antibiotic treatment.<br><br><strong style='color:navy; font-size: 1.0em;'>Dictionary:</strong><br><strong>CRP:</strong> <em>C-reactive protein — a blood test marker for inflammation that is often elevated with infections or sepsis.</em><br><strong>Clinician:</strong> <em>A healthcare professional involved in patient care, such as a doctor, nurse, or allied health worker.</em><br><br><strong>🧠 Remember this icon:</strong><br><div style='display: flex; align-items: center; gap: 20px;'><div><strong>Power</strong> = represented by the P<br><strong>Chart</strong> = depicted in background</div><img src='images/powerchart.png' alt='PowerChart Icon' style='height: 80px;'></div><br><strong>Product:</strong> <em>PowerChart — Cerner's electronic order communications system for labs.</em>Product:</strong> <em>PathNet Results</em><br><br><strong style='color:darkgreen;'>Keywords:</strong><br><em>Patient List, Summary View, Future Orders, Flowsheet, List Maintenance</em></span>"
    },

    {
      name: "Collections Inquiry",
      description: "Application used to view orders for which a specimen has not been collected or for which a specimen is collected but has not been logged in at the testing laboratory.",
      sourceHref: "documents_qpulse/QRG_Coming_Soon.pdf",
      sourceLabel: "Common Services - All about the AppBar",
      qrg: "documents_qpulse/QRG_Coming_Soon.pdf",
      qrgLabel: "Collections Inquiry",
      image: "collections_inquiry.png",
      "moreInfo": "<span style='font-size: 1.6em;'>\"Collections Inquiry\" is used by phlebotomists and lab staff to monitor pending specimen collections or investigate issues with unlogged specimens.<br><br><strong>Example Scenario:</strong> A phlebotomist checks \"Collections Inquiry\" before their morning round to see all outstanding blood tests that still require collection.<br><br><strong style='color:navy; font-size: 1.2em;'>Dictionary:</strong><br><strong>Specimen:</strong> <em>A sample of blood, urine, or other material taken from a patient for laboratory analysis.</em><br><strong>Phlebotomist:</strong> <em>A healthcare professional trained to draw blood samples from patients for laboratory testing.</em><br><br><strong>🧠 Remember this icon:</strong><br><div style='display: flex; align-items: center; gap: 20px;'><div>Dots = Specimen tubes for \"Collections\"<br>Speech bubble = Asking or checking — like an \"Inquiry\"</div><img src='images/collections_inquiry.png' alt='Collections Inquiry Icon' style='height: 80px;'></div><br><strong>Product:</strong> PathNet Collections"
    },
	
	{
      name: "Container Inquiry",
      description: "Container Inquiry is used to view detailed information about specimen containers based on the accession number assigned to the collection. You also can view the orders included in each container. The list includes containers that have aliquots associated with them so you can view the orders included in each aliquot.",
	  
	  name: "Container Inquiry",
description: "Container Inquiry is used to view detailed information about specimen containers based on the accession number assigned to the collection. You also can view the orders included in each container. The list includes containers that have aliquots associated with them so you can view the orders included in each aliquot.",

      sourceHref: "documents_qpulse/QRG_Coming_Soon.pdf",
      sourceLabel: "Common Services - All about the AppBar",
	  qrg: "documents_qpulse/QRG_Coming_Soon.pdf",
      qrgLabel: "Container Inquiry",

      image: "container_inquiry.png",
      moreInfo: `<span style='font-size: 1.6em;'><strong>\"Container Inquiry\"</strong> allows users to review container details, including associated aliquots and all included orders. It is important for tracking container history and contents.<br><br><strong>Example Scenario:</strong> A lab technician investigates a missing test result by using \"Container Inquiry\" to track the contents of a specific specimen container.<br><br><strong style='color:navy; font-size: 1.0em;'>Dictionary:</strong><br><strong>Container:</strong> <em>The receptacle holding one or more specimens, such as a test tube or vial.</em><br><strong>Accession Number:</strong> <em>A unique identifier assigned by the laboratory to correlate a specimen with its orders.</em><br><br><strong>🧠 Remember this icon:</strong><br><div style='display: flex; align-items: center; gap: 20px;'><div>White rectangle = "Container"<br>Speech Bubble = "Inquiry</div><img src='images/container_inquiry.png' alt='Container Inquiry Icon' style='height: 80px;'></div><br><strong>Product:</strong> <em>PathNet Collections</em></span>`
    },
    {
      name: "Label Reprint",
      description: "Application used to reprint labels, replace lost or damaged labels or for printing additional labels.",
	  
	  sourceHref: "documents_qpulse/QRG_Coming_Soon.pdf",
      sourceLabel: "Common Services - All about the AppBar",
	  qrg: "documents_qpulse/QRG_Coming_Soon.pdf",
      qrgLabel: "Specimen Labels",

      image: "label_reprint.png",
      moreInfo: `<span style='font-size: 1.6em;'><strong>\"Label Reprint\"</strong> helps staff quickly generate replacement or extra labels for specimen containers.<br><br><strong>Example Scenario:</strong> A nurse accidentally smudges a barcode label and uses \"Label Reprint\" to generate a clean replacement without recollecting the sample.<br><br><strong style='color:navy; font-size: 1.0em;'>Dictionary:</strong><br><strong>Label:</strong> <em>The printed identifier containing patient and specimen information and a barcode.</em><br><strong>Reprint:</strong> <em>The action of generating a new label with the same information.</em><br><br><strong>🧠 Remember this icon:</strong><br><div style='display: flex; align-items: center; gap: 20px;'><div>Yellow image = "Label"<br>White horizontal bars = "Reprint"</div><img src='images/label_reprint.png' alt='Label Reprint Icon' style='height: 80px;'></div><br><strong>Product:</strong> <em>PathNet Collections</em></span>`
    },
{
  name: "Department Order Entry",

 description: "Used to place laboratory orders from paper requisitions. You also can add an order to a previous order, cancel an order (Use unified Case manager to cancel Helix Orders), or register a patient prior to entering orders.",

  sourceHref: "documents_qpulse/QRG_Coming_Soon.pdf",
  sourceLabel: "Common Services – All about the AppBar",

  image: "department_order_entry.png",

  moreInfo: `
    <h3>Department Order Entry (DOE)</h3>

    <p>
      <strong>Department Order Entry</strong> is used to manually enter laboratory
      requests received on paper requisition forms. It supports patient
      registration, order creation, adding additional orders, and managing
      non-electronic requests.
    </p>

    <p>
      <strong>Important:</strong> Helix orders cannot be cancelled directly in DOE.
      Use <em>Unified Case Manager</em> for Helix order cancellations.
    </p>

    <h4>Example scenario</h4>
    <p>
      A laboratory receptionist receives a paper-based genetic test request and
      enters it into MedLIS using DOE to ensure the request is tracked, processed,
      and reported correctly.
    </p>

    <h4>Key terms</h4>
    <ul>
      <li>
        <strong>Helix:</strong>
        Laboratory Information Management System (LIMS) used for electronic test
        ordering and specimen workflows.
      </li>
      <li>
        <strong>Requisition:</strong>
        A paper-based request form used to initiate laboratory testing.
      </li>
    </ul>

    <h4>Q-Pulse documents related to DOE</h4>
    <ul>
  

    <p>
      <strong>Visual reminder:</strong><br>
      Lines on the icon represent <em>orders</em>, and the “X” represents
      <em>manual entry</em>.
    </p>

    <img src="images/department_order_entry.png"
         alt="Department Order Entry Icon"
         style="height:80px; margin-top:8px;">

    <p><strong>Product:</strong> PathNet Collections</p>
  `
},




{
  name: "Specimen Log-in",
  description: "Specimen Log-in is used to document specimen collection information, such as the collection time, collection ID, collection method, and the location where the specimen was received.",

  sourceHref: "documents_qpulse/QRG_Coming_Soon.pdf",
  sourceLabel: "Common Services - All about the AppBar",
  qrg: "documents_qpulse/QRG_Coming_Soon.pdf",
  qrgLabel: "Specimen Login",

  image: "specimen_log_in.png",
  moreInfo: "<span style='font-size: 1.6em;'>\"Specimen Log-in\" The primary function of the Specimen Log-In application is to document on the system when and where a specimen has been received within the laboratory and where it is to be sent to next for processing. It is a means of tracking receipt of specimens and adding them to worklists, outstanding tasks etc. Def (Q-Pulse)<br><br><strong>Example Scenario:</strong> A blood sample collected on a medical ward is sent to the lab. A technician verifies the label and logs it into the system using \"Specimen Log-in\".<br><br><strong style='color:navy;'>Dictionary:</strong><br><strong>Specimen:</strong> <em>A sample (e.g., blood or urine) collected for testing.</em><br><strong>Log-in:</strong> <em>The act of registering a specimen upon its arrival at the lab.</em><br><br><strong>🧠 Remember this icon:</strong><br>Arrow pointing into box = \"Specimen coming in\" or \"Log-in\"<img src='images/specimen_log_in.png' style='height: 60px; float: right; margin-left: 20px;'><br><br><strong>Product:</strong> <em>PathNet Results</em><br><br><strong style='color:darkgreen;'>Keywords:</strong><br><em>Modify Value, Foreign Order Alias, View Images, Coll ID</em></span>"
},


{
  name: "Order Result Viewer",
  description: "Order Result Viewer is used to display information pertaining to all ordered procedures and associated results.  This information can be requested for a specific person or accession number.",
  sourceHref: "documents_qpulse/QRG_Coming_Soon.pdf",
  sourceLabel: "Common Services - All about the AppBar",
  qrg: "documents_qpulse/QRG_Coming_Soon.pdf",
  qrgLabel: "Order Result Viewer",
  
  image: "order_result_viewer.png",
  moreInfo: "<span style='font-size: 1.6em;'><strong>\"Order Result Viewer\"</strong> is used to view completed test results. Lab staff, clinicians, and nurses use it to access and review lab findings once processing is finished. It’s a read-only tool for reviewing the outcome of lab tests.<br><br><strong>Example Scenario:</strong> A nurse uses \"Order Result Viewer\" to check potassium levels for a patient whose blood was drawn earlier in the day.<br><br><strong style='color:navy; font-size: 1.0em;'>Dictionary:</strong><br><strong>Result:</strong> <em>The final outcome of a lab test, such as a blood glucose value.</em><br><strong>Read-only:</strong> <em>Can be viewed but not changed.</em><br><br><strong>🧠 Remember this icon:</strong><br><div style='display: flex; align-items: center; gap: 20px;'><div><em>No suggestions – Add custom.</em></div><img src='images/order_result_viewer.png' alt='Order Result Viewer Icon' style='height: 80px;'></div><br><strong>Product:</strong> <em>PathNet Results</em><br><br><strong style='color:darkgreen;'>Keywords:</strong><br><em>keyword1, keyword2, keyword3</em></span>"
},

	

    // ...add remaining apps here
  ];

  // -----------------------------
  // Get DOM elements
  // -----------------------------
  const grid = document.getElementById('iconGrid');
  const modal = document.getElementById('infoModal');
  const modalContent = document.getElementById('modalContent');
  const modalClose = document.getElementById('modalClose');
  const titleEl = document.getElementById('appTitle');
  const descEl = document.getElementById('appDescription');
  const sourceEl = document.getElementById('appSource');
  const iconEl = document.getElementById('appIconModal');
  const moreInfoBtn = document.getElementById('moreInfoBtn');
  const moreInfoModal = document.getElementById('moreInfoModal');
  const moreInfoClose = document.getElementById('moreInfoClose');
  const moreInfoText = document.getElementById('moreInfoText');

  // -----------------------------
  // Sound toggle setup
  // -----------------------------
  let soundEnabled = true;
  const openSound = document.getElementById('openSound');
  const closeSound = document.getElementById('closeSound');

  const toggleBtn = document.createElement('button');
  toggleBtn.textContent = '🔊 Sound: ON';
  Object.assign(toggleBtn.style, {
    position: 'absolute',
    top: '36px',
    right: '40px',
    padding: '10px 18px',
    fontSize: '15px',
    background: '#28a745',
    color: '#fff',
    border: '2px solid #1e7e34',
    borderRadius: '12px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
    cursor: 'pointer',
    zIndex: '9999'
  });

  toggleBtn.addEventListener('click', () => {
    soundEnabled = !soundEnabled;
    toggleBtn.textContent = soundEnabled ? '🔊 Sound: ON' : '🔇 Sound: OFF';
    toggleBtn.style.background = soundEnabled ? '#28a745' : '#6c757d';
    toggleBtn.style.borderColor = soundEnabled ? '#1e7e34' : '#5a6268';
  });

  document.body.appendChild(toggleBtn);

  // -----------------------------
  // Create and position search bar(s)
  // Existing: app name search
  // NEW: keyword search
  // -----------------------------
  const searchWrap = document.createElement('div');
  searchWrap.innerHTML = `
    <div style="display:flex; gap:10px; align-items:center; flex-wrap:wrap; justify-content:center;">
      <div style="display:flex; gap:8px; align-items:center;">
        <input id="appSearch" type="text" placeholder="Search apps..." style="padding:12px;font-size:1.2em;width:300px;border-radius:12px;border:3px solid #000080;box-shadow:0 0 10px rgba(0,0,0,0.15);">
        <button id="nextMatch" style="padding:12px 18px;font-size:1.2em;border-radius:12px;background:#000080;color:#fff;border:none;cursor:pointer;box-shadow:0 0 10px rgba(0,0,0,0.15);">Search</button>
      </div>

      <div style="display:flex; gap:8px; align-items:center;">
        <input id="keywordSearch" type="text" placeholder="Search for Keywords..." style="padding:12px;font-size:1.2em;width:420px;border-radius:12px;border:3px solid #7d2ea8;box-shadow:0 0 10px rgba(0,0,0,0.15);">
        <button id="nextKeywordMatch" style="padding:12px 18px;font-size:1.2em;border-radius:12px;background:#7d2ea8;color:#fff;border:none;cursor:pointer;box-shadow:0 0 10px rgba(0,0,0,0.15);">Search Keywords</button>
      </div>
    </div>
  `;

  Object.assign(searchWrap.style, {
    position: 'absolute',
    top: '65px',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: '9998'
  });

  document.body.appendChild(searchWrap);

  // Insert a line break before the icon grid and indent
 /// grid.insertAdjacentHTML('beforebegin', '<br><br>');
  grid.style.marginLeft = '40px';
  grid.style.marginTop = '20px';
  grid.style.paddingLeft = '40px';

  // -----------------------------
  // Initialize search variables (existing name search)
  // -----------------------------
  const searchInput = document.getElementById('appSearch');
  const nextMatchBtn = document.getElementById('nextMatch');
  let searchMatches = [];
  let currentMatchIndex = 0;
  let prevMatch = null;
  let lastSearchTerm = '';

  // -----------------------------
  // Keyword search variables (NEW)
  // -----------------------------
  const keywordInput = document.getElementById('keywordSearch');
  const nextKeywordBtn = document.getElementById('nextKeywordMatch');
  let keywordMatches = [];
  let currentKeywordIndex = 0;
  let prevKeywordMatch = null;
  let lastKeywordTerm = '';

  // Trigger search on Enter key (name search)
  searchInput.addEventListener('keydown', event => {
    if (event.key === 'Enter') {
      event.preventDefault();
      nextMatchBtn.click();
    }
  });

  // Trigger keyword search on Enter key (NEW)
  keywordInput.addEventListener('keydown', event => {
    if (event.key === 'Enter') {
      event.preventDefault();
      nextKeywordBtn.click();
    }
  });

  // Popup for no search results
  function showNoResultsPopup() {
    if (document.getElementById('noResultsPopup')) return;
    const popup = document.createElement('div');
    popup.id = 'noResultsPopup';
    Object.assign(popup.style, {
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      background: '#fff',
      padding: '20px',
      border: '2px solid #007bff',
      borderRadius: '12px',
      zIndex: '10000',
      textAlign: 'center',
      fontSize: '1.4em',
      boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
    });
    popup.innerHTML = `
      <div>No results found.</div>
      <div><strong>Tip:</strong> Search for part of the name or a keyword.</div>
      <button id="closePopup" style="margin-top:16px;padding:8px 16px;font-size:1em;border:none;border-radius:8px;background:#007bff;color:#fff;cursor:pointer;">OK</button>
    `;
    document.body.appendChild(popup);
    document.getElementById('closePopup').addEventListener('click', () => popup.remove());
  }

  // Highlight function (name search)
  function highlightMatch() {
    if (!searchMatches.length) return;

    // Clear previous highlight
    if (prevMatch) {
      prevMatch.style.outline = '';
      prevMatch.style.outlineOffset = '';
    }

    const match = searchMatches[currentMatchIndex];
    match.scrollIntoView({ behavior: 'smooth', block: 'center' });
    match.style.outline = '8px solid #0066cc';
    match.style.outlineOffset = '-4px';
    prevMatch = match;

    currentMatchIndex = (currentMatchIndex + 1) % searchMatches.length;
  }

  // Convert HTML to plain text for keyword searching (NEW)
  function stripHtml(html = '') {
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    return (tmp.textContent || tmp.innerText || '').trim();
  }

  // Highlight function (keyword search) (NEW)
  function highlightKeywordMatch() {
    if (!keywordMatches.length) return;

    // Clear previous keyword highlight
    if (prevKeywordMatch) {
      prevKeywordMatch.style.outline = '';
      prevKeywordMatch.style.outlineOffset = '';
    }

    const match = keywordMatches[currentKeywordIndex];
    match.scrollIntoView({ behavior: 'smooth', block: 'center' });
    match.style.outline = '8px solid #7d2ea8';
    match.style.outlineOffset = '-4px';
    prevKeywordMatch = match;

    currentKeywordIndex = (currentKeywordIndex + 1) % keywordMatches.length;
  }

  // Search button handler (name search) - searches icon.dataset.name only
  nextMatchBtn.addEventListener('click', () => {
    const term = searchInput.value.trim().toLowerCase();

    if (!term) {
      searchMatches = [];
      currentMatchIndex = 0;
      lastSearchTerm = '';
      showNoResultsPopup();
      return;
    }

    if (term !== lastSearchTerm) {
      searchMatches = Array.from(document.querySelectorAll('.app-icon')).filter(icon =>
        (icon.dataset.name || '').toLowerCase().includes(term)
      );
      currentMatchIndex = 0;
      lastSearchTerm = term;
    }

    if (searchMatches.length === 0) {
      showNoResultsPopup();
    } else {
      highlightMatch();
    }
  });

  // Keyword search button handler (NEW)
  nextKeywordBtn.addEventListener('click', () => {
    const term = keywordInput.value.trim().toLowerCase();

    if (!term) {
      keywordMatches = [];
      currentKeywordIndex = 0;
      lastKeywordTerm = '';
      showNoResultsPopup();
      return;
    }

    if (term !== lastKeywordTerm) {
      keywordMatches = Array.from(document.querySelectorAll('.app-icon')).filter(icon => {
        const name = (icon.dataset.name || '').toLowerCase();
        const desc = (icon.dataset.description || '').toLowerCase();
        const more = stripHtml(icon.dataset.moreInfo || '').toLowerCase();

        // UPDATED: include sourceText as well as old source
        const source = stripHtml((icon.dataset.sourceText || icon.dataset.source || '')).toLowerCase();

        const qpulse = (icon.dataset.qpulseText || '').toLowerCase();
        const haystack = `${name} ${desc} ${more} ${source} ${qpulse}`;
        return haystack.includes(term);
      });

      currentKeywordIndex = 0;
      lastKeywordTerm = term;
    }

    if (keywordMatches.length === 0) {
      showNoResultsPopup();
    } else {
      highlightKeywordMatch();
    }
  });

  // -----------------------------
  // Populate grid with apps
  // -----------------------------
  apps.forEach(app => {
    const div = document.createElement('div');
    div.className = 'app-icon';

    div.dataset.name = app.name || '';
    div.dataset.description = app.description || '';
    div.dataset.image = app.image || '';
    div.dataset.moreInfo = app.moreInfo || '';

    // UPDATED: support clean format + backward compatibility
    div.dataset.sourceText = app.sourceText || '';
    div.dataset.source = app.source || '';
	
	div.dataset.sourceHref = app.sourceHref || '';
    div.dataset.sourceLabel = app.sourceLabel || '';

    div.dataset.qrg = app.qrg || '';
    div.dataset.qrgLabel = app.qrgLabel || '';
	
	div.dataset.qpulseText =
  (app.name === "Q-Pulse Documents" ? (window.QPULSE_SEARCH_TEXT || '') : '');


    div.innerHTML = `
      <img src="images/${app.image}" alt="${app.name}" onerror="this.onerror=null;this.src='images/placeholder.png';">
      <div class="app-name">${app.name}</div>
    `;

    grid.appendChild(div);
  });

 // -----------------------------
// Icon click handler
// -----------------------------
grid.addEventListener('click', e => {
  const icon = e.target.closest('.app-icon');
  if (!icon) return;

  // =============================
  // SPECIAL CASE: Q-Pulse Documents
  // =============================
  if ((icon.dataset.name || '').trim() === 'Q-Pulse Documents') {
    const qpulse = document.getElementById('qpulseIndex');

    // Hide the app grid completely
    grid.style.display = 'none';

    // Show Q-Pulse index
    if (qpulse) {
      qpulse.style.display = 'block';
      qpulse.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    return; // ⛔ DO NOT open modal
  }

  // =============================
  // NORMAL APP MODAL
  // =============================
  titleEl.textContent = icon.dataset.name || '';
  descEl.textContent = icon.dataset.description || '';

  const sourceHref  = (icon.dataset.sourceHref || '').trim();
  const sourceLabel = (icon.dataset.sourceLabel || '').trim();
  const qrgHref     = (icon.dataset.qrg || '').trim();
  const qrgLabel    = (icon.dataset.qrgLabel || 'Quick Reference Guide').trim();

  sourceEl.innerHTML = `
    ${sourceHref ? `
      <div>
        Definition Source:
        <a href="${sourceHref}" target="_blank" rel="noopener">
          ${sourceLabel || sourceHref}
        </a>
      </div>
    ` : ''}

    ${qrgHref ? `
      <div style="margin-top:6px;">
        <a href="${qrgHref}" target="_blank" rel="noopener">
          QRG : 📄 ${qrgLabel}
        </a>
      </div>
    ` : ''}
  `;

  iconEl.src = `images/${icon.dataset.image || ''}`;
  iconEl.alt = icon.dataset.name || 'App Icon';

  moreInfoBtn.dataset.moreInfo = icon.dataset.moreInfo || '';

  modalContent.classList.remove('shrink');
  modal.classList.remove('fade-out');
  modal.style.display = 'flex';
  moreInfoBtn.style.display = 'block';

  if (soundEnabled && openSound) {
    try { openSound.currentTime = 0; openSound.play(); } catch (_) {}
  }
});


  // -----------------------------
  // Primary modal close
  // -----------------------------
  modalClose.addEventListener('click', () => {
    if (soundEnabled && closeSound) {
      try {
        closeSound.currentTime = 0;
        closeSound.play();
      } catch (_) {}
    }
    modal.style.display = 'none';
  });

  // -----------------------------
  // Secondary (more info) modal handlers
  // -----------------------------
  moreInfoBtn.addEventListener('click', () => {
    moreInfoText.innerHTML = moreInfoBtn.dataset.moreInfo || 'No additional info available.';
    moreInfoModal.style.display = 'flex';

    if (soundEnabled && openSound) {
      try {
        openSound.currentTime = 0;
        openSound.play();
      } catch (_) {}
    }
  });

  moreInfoClose.addEventListener('click', () => {
    moreInfoModal.style.display = 'none';

    if (soundEnabled && closeSound) {
      try {
        closeSound.currentTime = 0;
        closeSound.play();
      } catch (_) {}
    }
  });

  moreInfoModal.addEventListener('click', e => {
    if (e.target === moreInfoModal) {
      moreInfoModal.style.display = 'none';

      if (soundEnabled && closeSound) {
        try {
          closeSound.currentTime = 0;
          closeSound.play();
        } catch (_) {}
      }
    }
  });
});

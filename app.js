// App State Management
class AppState {
    constructor() {
        this.currentSection = 'plc-hmi';
        this.checklistData = this.loadChecklistData();
        this.projectInfo = this.loadProjectInfo();
        this.currentTask = null;
    }

    loadChecklistData() {
        const saved = localStorage.getItem('boilerChecklistData');
        return saved ? JSON.parse(saved) : this.getDefaultChecklistData();
    }

    loadProjectInfo() {
        const saved = localStorage.getItem('boilerProjectInfo');
        return saved ? JSON.parse(saved) : {};
    }

    getDefaultChecklistData() {
        return {
            'plc-hmi': [
                {
                    id: 'plc-1',
                    title: 'PLC Hardware Installation Check',
                    description: 'Verify all PLC modules are properly installed and secured',
                    completed: false,
                    photos: [],
                    signature: null,
                    notes: ''
                },
                {
                    id: 'plc-2',
                    title: 'PLC Programming Cable Connection',
                    description: 'Connect programming cable and verify communication',
                    completed: false,
                    photos: [],
                    signature: null,
                    notes: ''
                },
                {
                    id: 'plc-3',
                    title: 'PLC Program Upload/Download',
                    description: 'Upload or download the control program to/from PLC',
                    completed: false,
                    photos: [],
                    signature: null,
                    notes: ''
                },
                {
                    id: 'plc-4',
                    title: 'PLC I/O Configuration Verification',
                    description: 'Verify I/O addresses match the electrical drawings',
                    completed: false,
                    photos: [],
                    signature: null,
                    notes: ''
                },
                {
                    id: 'plc-5',
                    title: 'HMI Screen Navigation Test',
                    description: 'Test all HMI screens and navigation functions',
                    completed: false,
                    photos: [],
                    signature: null,
                    notes: ''
                },
                {
                    id: 'plc-6',
                    title: 'Alarm and Warning Configuration',
                    description: 'Verify all alarms and warnings are properly configured',
                    completed: false,
                    photos: [],
                    signature: null,
                    notes: ''
                },
                {
                    id: 'plc-7',
                    title: 'Data Logging Configuration',
                    description: 'Configure data logging parameters and verify functionality',
                    completed: false,
                    photos: [],
                    signature: null,
                    notes: ''
                },
                {
                    id: 'plc-8',
                    title: 'PLC/HMI Communication Test',
                    description: 'Verify communication between PLC and HMI is working properly',
                    completed: false,
                    photos: [],
                    signature: null,
                    notes: ''
                }
            ],
            'io-termination': [
                {
                    id: 'io-1',
                    title: 'Digital Input Termination Check',
                    description: 'Verify all digital input terminations are secure and properly labeled',
                    completed: false,
                    photos: [],
                    signature: null,
                    notes: ''
                },
                {
                    id: 'io-2',
                    title: 'Digital Output Termination Check',
                    description: 'Verify all digital output terminations are secure and properly labeled',
                    completed: false,
                    photos: [],
                    signature: null,
                    notes: ''
                },
                {
                    id: 'io-3',
                    title: 'Analog Input Termination Check',
                    description: 'Verify all analog input terminations are secure and properly labeled',
                    completed: false,
                    photos: [],
                    signature: null,
                    notes: ''
                },
                {
                    id: 'io-4',
                    title: 'Analog Output Termination Check',
                    description: 'Verify all analog output terminations are secure and properly labeled',
                    completed: false,
                    photos: [],
                    signature: null,
                    notes: ''
                },
                {
                    id: 'io-5',
                    title: 'Power Supply Connections',
                    description: 'Verify all power supply connections are secure and properly sized',
                    completed: false,
                    photos: [],
                    signature: null,
                    notes: ''
                },
                {
                    id: 'io-6',
                    title: 'Grounding and Shielding Check',
                    description: 'Verify proper grounding and shielding of all I/O cables',
                    completed: false,
                    photos: [],
                    signature: null,
                    notes: ''
                },
                {
                    id: 'io-7',
                    title: 'I/O Module Status Check',
                    description: 'Verify all I/O modules show correct status indicators',
                    completed: false,
                    photos: [],
                    signature: null,
                    notes: ''
                },
                {
                    id: 'io-8',
                    title: 'Cable Documentation Review',
                    description: 'Review and verify cable documentation and labeling',
                    completed: false,
                    photos: [],
                    signature: null,
                    notes: ''
                }
            ],
            'vfd-setup': [
                {
                    id: 'vfd-1',
                    title: 'VFD Installation and Mounting',
                    description: 'Verify VFD is properly installed and securely mounted',
                    completed: false,
                    photos: [],
                    signature: null,
                    notes: ''
                },
                {
                    id: 'vfd-2',
                    title: 'VFD Power Connections',
                    description: 'Verify all power connections to VFD are secure and properly sized',
                    completed: false,
                    photos: [],
                    signature: null,
                    notes: ''
                },
                {
                    id: 'vfd-3',
                    title: 'VFD Control Signal Connections',
                    description: 'Verify all control signal connections are secure and properly labeled',
                    completed: false,
                    photos: [],
                    signature: null,
                    notes: ''
                },
                {
                    id: 'vfd-4',
                    title: 'Motor Parameter Configuration',
                    description: 'Configure motor nameplate parameters in VFD',
                    completed: false,
                    photos: [],
                    signature: null,
                    notes: ''
                },
                {
                    id: 'vfd-5',
                    title: 'VFD Basic Parameter Setup',
                    description: 'Configure basic VFD parameters (acceleration, deceleration, etc.)',
                    completed: false,
                    photos: [],
                    signature: null,
                    notes: ''
                },
                {
                    id: 'vfd-6',
                    title: 'VFD Protection Settings',
                    description: 'Configure VFD protection parameters (overcurrent, overvoltage, etc.)',
                    completed: false,
                    photos: [],
                    signature: null,
                    notes: ''
                },
                {
                    id: 'vfd-7',
                    title: 'VFD Test Run',
                    description: 'Perform test run and verify VFD operation',
                    completed: false,
                    photos: [],
                    signature: null,
                    notes: ''
                },
                {
                    id: 'vfd-8',
                    title: 'VFD Fault Diagnostic Test',
                    description: 'Test fault diagnostics and verify proper fault handling',
                    completed: false,
                    photos: [],
                    signature: null,
                    notes: ''
                }
            ],
            'instrument-loop': [
                {
                    id: 'inst-1',
                    title: 'Pressure Transmitter Calibration',
                    description: 'Calibrate and verify all pressure transmitters',
                    completed: false,
                    photos: [],
                    signature: null,
                    notes: ''
                },
                {
                    id: 'inst-2',
                    title: 'Temperature Transmitter Calibration',
                    description: 'Calibrate and verify all temperature transmitters',
                    completed: false,
                    photos: [],
                    signature: null,
                    notes: ''
                },
                {
                    id: 'inst-3',
                    title: 'Flow Meter Calibration',
                    description: 'Calibrate and verify all flow meters',
                    completed: false,
                    photos: [],
                    signature: null,
                    notes: ''
                },
                {
                    id: 'inst-4',
                    title: 'Level Transmitter Calibration',
                    description: 'Calibrate and verify all level transmitters',
                    completed: false,
                    photos: [],
                    signature: null,
                    notes: ''
                },
                {
                    id: 'inst-5',
                    title: 'Instrument Air Supply Check',
                    description: 'Verify instrument air supply pressure and quality',
                    completed: false,
                    photos: [],
                    signature: null,
                    notes: ''
                },
                {
                    id: 'inst-6',
                    title: 'Control Valve Calibration',
                    description: 'Calibrate and verify all control valve positioners',
                    completed: false,
                    photos: [],
                    signature: null,
                    notes: ''
                },
                {
                    id: 'inst-7',
                    title: 'Safety Instrument System Test',
                    description: 'Test safety instrumented functions and verify proper operation',
                    completed: false,
                    photos: [],
                    signature: null,
                    notes: ''
                },
                {
                    id: 'inst-8',
                    title: 'Instrument Loop Documentation',
                    description: 'Verify all instrument loop documentation and calibration certificates',
                    completed: false,
                    photos: [],
                    signature: null,
                    notes: ''
                }
            ],
            'simulation': [
                {
                    id: 'sim-1',
                    title: 'System Start-up Sequence Test',
                    description: 'Test complete system start-up sequence in simulation mode',
                    completed: false,
                    photos: [],
                    signature: null,
                    notes: ''
                },
                {
                    id: 'sim-2',
                    title: 'System Shutdown Sequence Test',
                    description: 'Test complete system shutdown sequence in simulation mode',
                    completed: false,
                    photos: [],
                    signature: null,
                    notes: ''
                },
                {
                    id: 'sim-3',
                    title: 'Emergency Shutdown Test',
                    description: 'Test emergency shutdown sequence and verify all safety interlocks',
                    completed: false,
                    photos: [],
                    signature: null,
                    notes: ''
                },
                {
                    id: 'sim-4',
                    title: 'Alarm and Trip Simulation',
                    description: 'Simulate all alarm and trip conditions to verify proper response',
                    completed: false,
                    photos: [],
                    signature: null,
                    notes: ''
                },
                {
                    id: 'sim-5',
                    title: 'Control Loop Performance Test',
                    description: 'Test all control loops for proper performance in simulation',
                    completed: false,
                    photos: [],
                    signature: null,
                    notes: ''
                },
                {
                    id: 'sim-6',
                    title: 'FAT (Factory Acceptance Test)',
                    description: 'Complete factory acceptance testing procedures',
                    completed: false,
                    photos: [],
                    signature: null,
                    notes: ''
                },
                {
                    id: 'sim-7',
                    title: 'SAT (Site Acceptance Test)',
                    description: 'Complete site acceptance testing procedures',
                    completed: false,
                    photos: [],
                    signature: null,
                    notes: ''
                },
                {
                    id: 'sim-8',
                    title: 'Final System Integration Test',
                    description: 'Perform final system integration test with all subsystems',
                    completed: false,
                    photos: [],
                    signature: null,
                    notes: ''
                }
            ]
        };
    }

    saveChecklistData() {
        localStorage.setItem('boilerChecklistData', JSON.stringify(this.checklistData));
    }

    saveProjectInfo() {
        localStorage.setItem('boilerProjectInfo', JSON.stringify(this.projectInfo));
    }

    getCurrentSectionData() {
        return this.checklistData[this.currentSection];
    }

    updateTask(taskId, updates) {
        const sectionData = this.checklistData[this.currentSection];
        const taskIndex = sectionData.findIndex(task => task.id === taskId);
        if (taskIndex !== -1) {
            this.checklistData[this.currentSection][taskIndex] = {
                ...sectionData[taskIndex],
                ...updates
            };
            this.saveChecklistData();
        }
    }

    getSectionProgress(sectionKey) {
        const sectionData = this.checklistData[sectionKey];
        const completed = sectionData.filter(task => task.completed).length;
        return {
            completed,
            total: sectionData.length,
            percentage: Math.round((completed / sectionData.length) * 100)
        };
    }

    isAllSectionsComplete() {
        return Object.keys(this.checklistData).every(sectionKey => {
            const progress = this.getSectionProgress(sectionKey);
            return progress.completed === progress.total;
        });
    }
}

// Initialize App
const app = new AppState();

// DOM Elements
const elements = {
    // Navigation
    sectionTabs: document.querySelectorAll('.tab-btn'),
    checklistSections: document.querySelectorAll('.checklist-section'),
    
    // Progress
    currentSectionTitle: document.getElementById('currentSectionTitle'),
    progressText: document.getElementById('progressText'),
    progressFill: document.getElementById('progressFill'),
    
    // Project Info
    projectName: document.getElementById('projectName'),
    boilerModel: document.getElementById('boilerModel'),
    technicianName: document.getElementById('technicianName'),
    commissioningDate: document.getElementById('commissioningDate'),
    
    // Modals
    photoModal: document.getElementById('photoModal'),
    signatureModal: document.getElementById('signatureModal'),
    notesModal: document.getElementById('notesModal'),
    
    // Photo Modal Elements
    photoModalTitle: document.getElementById('photoModalTitle'),
    photoUploadArea: document.getElementById('photoUploadArea'),
    photoInput: document.getElementById('photoInput'),
    uploadPlaceholder: document.getElementById('uploadPlaceholder'),
    photoPreview: document.getElementById('photoPreview'),
    previewImage: document.getElementById('previewImage'),
    removePhoto: document.getElementById('removePhoto'),
    confirmPhotoUpload: document.getElementById('confirmPhotoUpload'),
    
    // Signature Modal Elements
    signatureTaskTitle: document.getElementById('signatureTaskTitle'),
    signatureCanvas: document.getElementById('signatureCanvas'),
    signaturePlaceholder: document.getElementById('signaturePlaceholder'),
    signatureName: document.getElementById('signatureName'),
    clearSignature: document.getElementById('clearSignature'),
    
    // Notes Modal Elements
    notesTaskTitle: document.getElementById('notesTaskTitle'),
    taskNotes: document.getElementById('taskNotes'),
    
    // Buttons
    exportPdfBtn: document.getElementById('exportPdfBtn'),
    closePhotoModal: document.getElementById('closePhotoModal'),
    cancelPhotoUpload: document.getElementById('cancelPhotoUpload'),
    closeSignatureModal: document.getElementById('closeSignatureModal'),
    cancelSignature: document.getElementById('cancelSignature'),
    confirmSignature: document.getElementById('confirmSignature'),
    closeNotesModal: document.getElementById('closeNotesModal'),
    cancelNotes: document.getElementById('cancelNotes'),
    confirmNotes: document.getElementById('confirmNotes')
};

// Initialize App
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
    renderChecklist();
    updateProgress();
    loadProjectInfo();
});

function initializeApp() {
    // Set today's date as default
    if (!elements.commissioningDate.value) {
        elements.commissioningDate.value = new Date().toISOString().split('T')[0];
    }
}

function setupEventListeners() {
    // Section Navigation
    elements.sectionTabs.forEach(tab => {
        tab.addEventListener('click', () => switchSection(tab.dataset.section));
    });
    
    // Project Info
    [elements.projectName, elements.boilerModel, elements.technicianName].forEach(input => {
        input.addEventListener('input', saveProjectInfo);
    });
    
    elements.commissioningDate.addEventListener('change', saveProjectInfo);
    
    // Modal Controls
    setupModalListeners();
    
    // Photo Upload
    setupPhotoUploadListeners();
    
    // Signature
    setupSignatureListeners();
    
    // Export PDF
    elements.exportPdfBtn.addEventListener('click', exportToPDF);
}

function setupModalListeners() {
    // Photo Modal
    elements.closePhotoModal.addEventListener('click', () => closeModal('photoModal'));
    elements.cancelPhotoUpload.addEventListener('click', () => closeModal('photoModal'));
    
    // Signature Modal
    elements.closeSignatureModal.addEventListener('click', () => closeModal('signatureModal'));
    elements.cancelSignature.addEventListener('click', () => closeModal('signatureModal'));
    
    // Notes Modal
    elements.closeNotesModal.addEventListener('click', () => closeModal('notesModal'));
    elements.cancelNotes.addEventListener('click', () => closeModal('notesModal'));
    
    // Click outside modal to close
    [elements.photoModal, elements.signatureModal, elements.notesModal].forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal(modal.id);
            }
        });
    });
}

function setupPhotoUploadListeners() {
    elements.photoUploadArea.addEventListener('click', () => {
        elements.photoInput.click();
    });
    
    elements.photoInput.addEventListener('change', handlePhotoUpload);
    elements.removePhoto.addEventListener('click', removePhoto);
    elements.confirmPhotoUpload.addEventListener('click', confirmPhotoUpload);
}

function setupSignatureListeners() {
    const canvas = elements.signatureCanvas;
    const ctx = canvas.getContext('2d');
    let isDrawing = false;
    let hasSignature = false;
    
    // Set canvas styling
    ctx.strokeStyle = '#111827';
    ctx.lineWidth = 2;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    
    // Mouse events
    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseout', stopDrawing);
    
    // Touch events
    canvas.addEventListener('touchstart', (e) => {
        e.preventDefault();
        const touch = e.touches[0];
        const rect = canvas.getBoundingClientRect();
        const x = touch.clientX - rect.left;
        const y = touch.clientY - rect.top;
        
        isDrawing = true;
        ctx.beginPath();
        ctx.moveTo(x, y);
        elements.signaturePlaceholder.style.display = 'none';
        updateSignatureButton();
    });
    
    canvas.addEventListener('touchmove', (e) => {
        e.preventDefault();
        if (!isDrawing) return;
        
        const touch = e.touches[0];
        const rect = canvas.getBoundingClientRect();
        const x = touch.clientX - rect.left;
        const y = touch.clientY - rect.top;
        
        ctx.lineTo(x, y);
        ctx.stroke();
        hasSignature = true;
        updateSignatureButton();
    });
    
    canvas.addEventListener('touchend', (e) => {
        e.preventDefault();
        isDrawing = false;
    });
    
    function startDrawing(e) {
        isDrawing = true;
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        ctx.beginPath();
        ctx.moveTo(x, y);
        elements.signaturePlaceholder.style.display = 'none';
        hasSignature = true;
        updateSignatureButton();
    }
    
    function draw(e) {
        if (!isDrawing) return;
        
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        ctx.lineTo(x, y);
        ctx.stroke();
        hasSignature = true;
        updateSignatureButton();
    }
    
    function stopDrawing() {
        isDrawing = false;
    }
    
    elements.clearSignature.addEventListener('click', () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        elements.signaturePlaceholder.style.display = 'flex';
        elements.signatureName.value = '';
        hasSignature = false;
        updateSignatureButton();
    });
    
    elements.signatureName.addEventListener('input', updateSignatureButton);
    elements.confirmSignature.addEventListener('click', confirmSignature);
    
    function updateSignatureButton() {
        const isValid = hasSignature && elements.signatureName.value.trim().length > 0;
        elements.confirmSignature.disabled = !isValid;
    }
}

function switchSection(sectionKey) {
    // Update current section
    app.currentSection = sectionKey;
    
    // Update tabs
    elements.sectionTabs.forEach(tab => {
        tab.classList.toggle('active', tab.dataset.section === sectionKey);
    });
    
    // Update sections
    elements.checklistSections.forEach(section => {
        section.classList.toggle('active', section.id === sectionKey);
    });
    
    // Update progress
    updateProgress();
    
    // Render checklist
    renderChecklist();
}

function renderChecklist() {
    const sectionData = app.getCurrentSectionData();
    const containerId = `${app.currentSection}-items`;
    const container = document.getElementById(containerId);
    
    if (!container) return;
    
    container.innerHTML = '';
    
    sectionData.forEach(task => {
        const taskElement = createTaskElement(task);
        container.appendChild(taskElement);
    });
}

function createTaskElement(task) {
    const div = document.createElement('div');
    div.className = `checklist-item ${task.completed ? 'completed' : ''}`;
    div.dataset.taskId = task.id;
    
    const statusClass = task.completed ? (task.signature ? 'signed' : 'completed') : 'pending';
    const photoCount = task.photos ? task.photos.length : 0;
    const hasNotes = task.notes && task.notes.trim().length > 0;
    
    div.innerHTML = `
        <div class="item-header">
            <div class="item-checkbox ${task.completed ? 'checked' : ''}">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="20,6 9,17 4,12"></polyline>
                </svg>
            </div>
            <div class="item-content">
                <div class="item-title">${task.title}</div>
                <div class="item-description">${task.description}</div>
                <div class="item-meta">
                    <span class="item-status ${statusClass}">
                        ${task.completed ? (task.signature ? 'Signed' : 'Completed') : 'Pending'}
                    </span>
                </div>
            </div>
            <div class="item-actions">
                <button class="action-btn photo-btn" ${!task.completed ? 'disabled' : ''} title="Upload Photo">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                        <circle cx="8.5" cy="8.5" r="1.5"/>
                        <polyline points="21,15 16,10 5,21"/>
                    </svg>
                    ${photoCount > 0 ? `<span class="photo-count">${photoCount}</span>` : ''}
                </button>
                <button class="action-btn notes-btn" ${!task.completed ? 'disabled' : ''} title="Add Notes">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                        <polyline points="14,2 14,8 20,8"/>
                        <line x1="16" y1="13" x2="8" y2="13"/>
                        <line x1="16" y1="17" x2="8" y2="17"/>
                        <polyline points="10,9 9,9 8,9"/>
                    </svg>
                    ${hasNotes ? `<span class="notes-count">1</span>` : ''}
                </button>
                <button class="action-btn signature-btn" ${!task.completed ? 'disabled' : ''} title="Sign Task">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M12 19l-7-7 3-3 4 4-7 7z"/>
                        <path d="M18 6l-1.5-1.5L14 6l-2-2L9 6l-1.5 1.5L5 6v14h14l-1.5-1.5L20 17l-2 2z"/>
                    </svg>
                    ${task.signature ? `<span class="photo-count">✓</span>` : ''}
                </button>
            </div>
        </div>
    `;
    
    // Add event listeners
    div.addEventListener('click', (e) => {
        if (e.target.closest('.action-btn')) return; // Don't toggle if clicking action buttons
        toggleTask(task.id);
    });
    
    // Action button listeners
    div.querySelector('.photo-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        openPhotoModal(task.id);
    });
    
    div.querySelector('.notes-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        openNotesModal(task.id);
    });
    
    div.querySelector('.signature-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        openSignatureModal(task.id);
    });
    
    return div;
}

function toggleTask(taskId) {
    const sectionData = app.getCurrentSectionData();
    const task = sectionData.find(t => t.id === taskId);
    
    if (task) {
        const newCompleted = !task.completed;
        app.updateTask(taskId, { completed: newCompleted });
        
        // Update UI
        const taskElement = document.querySelector(`[data-task-id="${taskId}"]`);
        if (taskElement) {
            taskElement.classList.toggle('completed', newCompleted);
            taskElement.querySelector('.item-checkbox').classList.toggle('checked', newCompleted);
            taskElement.querySelector('.item-status').className = `item-status ${newCompleted ? 'completed' : 'pending'}`;
            taskElement.querySelector('.item-status').textContent = newCompleted ? 'Completed' : 'Pending';
            
            // Enable/disable action buttons
            taskElement.querySelectorAll('.action-btn').forEach(btn => {
                btn.disabled = !newCompleted;
            });
        }
        
        updateProgress();
    }
}

function updateProgress() {
    const sectionNames = {
        'plc-hmi': 'PLC/HMI Program Editing',
        'io-termination': 'I/O Termination Verification',
        'vfd-setup': 'VFD Parameter Setup',
        'instrument-loop': 'Instrument Loop Check',
        'simulation': 'Simulation & FAT/SAT Procedures'
    };
    
    const progress = app.getSectionProgress(app.currentSection);
    
    elements.currentSectionTitle.textContent = sectionNames[app.currentSection];
    elements.progressText.textContent = `${progress.completed} of ${progress.total} completed`;
    elements.progressFill.style.width = `${progress.percentage}%`;
    
    // Update export button state
    const canExport = app.isAllSectionsComplete();
    elements.exportPdfBtn.disabled = !canExport;
    elements.exportPdfBtn.title = canExport ? 'Export PDF Report' : 'Complete all sections to enable export';
}

function saveProjectInfo() {
    app.projectInfo = {
        projectName: elements.projectName.value,
        boilerModel: elements.boilerModel.value,
        technicianName: elements.technicianName.value,
        commissioningDate: elements.commissioningDate.value
    };
    app.saveProjectInfo();
}

function loadProjectInfo() {
    if (app.projectInfo.projectName) elements.projectName.value = app.projectInfo.projectName;
    if (app.projectInfo.boilerModel) elements.boilerModel.value = app.projectInfo.boilerModel;
    if (app.projectInfo.technicianName) elements.technicianName.value = app.projectInfo.technicianName;
    if (app.projectInfo.commissioningDate) elements.commissioningDate.value = app.projectInfo.commissioningDate;
}

// Photo Upload Functions
let currentPhotoTaskId = null;
let currentPhotoData = null;

function openPhotoModal(taskId) {
    currentPhotoTaskId = taskId;
    const task = app.getCurrentSectionData().find(t => t.id === taskId);
    
    elements.photoModalTitle.textContent = `Upload Photo - ${task.title}`;
    
    // Reset modal
    elements.photoPreview.style.display = 'none';
    elements.uploadPlaceholder.style.display = 'flex';
    elements.confirmPhotoUpload.disabled = true;
    elements.photoInput.value = '';
    
    openModal('photoModal');
}

function handlePhotoUpload(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = function(e) {
        currentPhotoData = e.target.result;
        elements.previewImage.src = currentPhotoData;
        elements.uploadPlaceholder.style.display = 'none';
        elements.photoPreview.style.display = 'block';
        elements.confirmPhotoUpload.disabled = false;
    };
    reader.readAsDataURL(file);
}

function removePhoto() {
    currentPhotoData = null;
    elements.photoPreview.style.display = 'none';
    elements.uploadPlaceholder.style.display = 'flex';
    elements.confirmPhotoUpload.disabled = true;
    elements.photoInput.value = '';
}

function confirmPhotoUpload() {
    if (!currentPhotoData || !currentPhotoTaskId) return;
    
    const task = app.getCurrentSectionData().find(t => t.id === currentPhotoTaskId);
    if (task) {
        const photos = task.photos || [];
        photos.push({
            id: Date.now(),
            data: currentPhotoData,
            timestamp: new Date().toISOString()
        });
        
        app.updateTask(currentPhotoTaskId, { photos });
        renderChecklist();
    }
    
    closeModal('photoModal');
    currentPhotoTaskId = null;
    currentPhotoData = null;
}

// Signature Functions
let currentSignatureTaskId = null;

function openSignatureModal(taskId) {
    currentSignatureTaskId = taskId;
    const task = app.getCurrentSectionData().find(t => t.id === taskId);
    
    elements.signatureTaskTitle.textContent = task.title;
    elements.signatureName.value = '';
    
    // Clear canvas
    const ctx = elements.signatureCanvas.getContext('2d');
    ctx.clearRect(0, 0, elements.signatureCanvas.width, elements.signatureCanvas.height);
    elements.signaturePlaceholder.style.display = 'flex';
    elements.confirmSignature.disabled = true;
    
    openModal('signatureModal');
}

function confirmSignature() {
    if (!currentSignatureTaskId) return;
    
    const signatureData = elements.signatureCanvas.toDataURL();
    const signatureName = elements.signatureName.value.trim();
    
    if (signatureData && signatureName) {
        app.updateTask(currentSignatureTaskId, {
            signature: {
                data: signatureData,
                name: signatureName,
                timestamp: new Date().toISOString()
            }
        });
        
        renderChecklist();
    }
    
    closeModal('signatureModal');
    currentSignatureTaskId = null;
}

// Notes Functions
let currentNotesTaskId = null;

function openNotesModal(taskId) {
    currentNotesTaskId = taskId;
    const task = app.getCurrentSectionData().find(t => t.id === taskId);
    
    elements.notesTaskTitle.textContent = task.title;
    elements.taskNotes.value = task.notes || '';
    
    openModal('notesModal');
}

function confirmNotes() {
    if (!currentNotesTaskId) return;
    
    const notes = elements.taskNotes.value.trim();
    app.updateTask(currentNotesTaskId, { notes });
    
    renderChecklist();
    closeModal('notesModal');
    currentNotesTaskId = null;
}

// Modal Functions
function openModal(modalId) {
    document.getElementById(modalId).classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
    document.body.style.overflow = '';
}

// PDF Export Functions
async function exportToPDF() {
    if (!app.isAllSectionsComplete()) {
        alert('Please complete all checklist sections before exporting.');
        return;
    }
    
    if (!app.projectInfo.projectName || !app.projectInfo.technicianName) {
        alert('Please fill in the project information before exporting.');
        return;
    }
    
    try {
        elements.exportPdfBtn.disabled = true;
        elements.exportPdfBtn.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12,6 12,12 16,14"></polyline></svg> Generating PDF...';
        
        const { jsPDF } = window.jspdf;
        const pdf = new jsPDF();
        
        // Add title page
        pdf.setFontSize(24);
        pdf.text('Boiler Commissioning Checklist Report', 20, 40);
        
        pdf.setFontSize(16);
        pdf.text('Project Information', 20, 70);
        
        pdf.setFontSize(12);
        pdf.text(`Project Name: ${app.projectInfo.projectName}`, 20, 90);
        pdf.text(`Boiler Model: ${app.projectInfo.boilerModel}`, 20, 105);
        pdf.text(`Technician: ${app.projectInfo.technicianName}`, 20, 120);
        pdf.text(`Date: ${app.projectInfo.commissioningDate}`, 20, 135);
        
        // Add completion summary
        pdf.text('Completion Summary:', 20, 160);
        let yPos = 180;
        
        Object.keys(app.checklistData).forEach(sectionKey => {
            const progress = app.getSectionProgress(sectionKey);
            const sectionNames = {
                'plc-hmi': 'PLC/HMI Program Editing',
                'io-termination': 'I/O Termination Verification',
                'vfd-setup': 'VFD Parameter Setup',
                'instrument-loop': 'Instrument Loop Check',
                'simulation': 'Simulation & FAT/SAT Procedures'
            };
            
            pdf.text(`${sectionNames[sectionKey]}: ${progress.completed}/${progress.total} completed`, 25, yPos);
            yPos += 15;
        });
        
        // Add checklist details for each section
        Object.keys(app.checklistData).forEach(sectionKey => {
            pdf.addPage();
            
            const sectionNames = {
                'plc-hmi': 'PLC/HMI Program Editing',
                'io-termination': 'I/O Termination Verification',
                'vfd-setup': 'VFD Parameter Setup',
                'instrument-loop': 'Instrument Loop Check',
                'simulation': 'Simulation & FAT/SAT Procedures'
            };
            
            pdf.setFontSize(18);
            pdf.text(sectionNames[sectionKey], 20, 30);
            
            const sectionData = app.checklistData[sectionKey];
            let yPos = 50;
            
            sectionData.forEach(task => {
                if (yPos > 270) {
                    pdf.addPage();
                    yPos = 30;
                }
                
                pdf.setFontSize(12);
                pdf.text(`${task.completed ? '✓' : '○'} ${task.title}`, 20, yPos);
                
                if (task.signature) {
                    pdf.setFontSize(10);
                    pdf.text(`Signed by: ${task.signature.name}`, 25, yPos + 10);
                    pdf.text(`Date: ${new Date(task.signature.timestamp).toLocaleDateString()}`, 25, yPos + 20);
                }
                
                if (task.notes) {
                    pdf.setFontSize(10);
                    const notes = task.notes.length > 100 ? task.notes.substring(0, 100) + '...' : task.notes;
                    pdf.text(`Notes: ${notes}`, 25, yPos + 10);
                }
                
                yPos += 35;
            });
        });
        
        // Save PDF
        const fileName = `Boiler_Commissioning_${app.projectInfo.projectName.replace(/\s+/g, '_')}_${new Date().toISOString().split('T')[0]}.pdf`;
        pdf.save(fileName);
        
    } catch (error) {
        console.error('Error generating PDF:', error);
        alert('Error generating PDF. Please try again.');
    } finally {
        elements.exportPdfBtn.disabled = false;
        elements.exportPdfBtn.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14,2 14,8 20,8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10,9 9,9 8,9"/></svg> Export PDF';
    }
}

// Utility Functions
function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

function downloadData() {
    const data = {
        projectInfo: app.projectInfo,
        checklistData: app.checklistData,
        exportDate: new Date().toISOString()
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `boiler_checklist_backup_${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// Auto-save functionality
setInterval(() => {
    app.saveChecklistData();
    app.saveProjectInfo();
}, 30000); // Auto-save every 30 seconds
// Toggle mobile menu
function toggleMenu() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('active');
}

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
  const sidebar = document.getElementById('sidebar');
  const menuToggle = document.querySelector('.menu-toggle');
  
  if (!sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
    sidebar.classList.remove('active');
  }
});

// Add smooth hover effects for document items
const documentItems = document.querySelectorAll('.document-item');
documentItems.forEach(item => {
  item.addEventListener('mouseover', () => {
    item.style.backgroundColor = '#f8f9fa';
    item.style.transition = 'background-color 0.3s ease';
  });
  
  item.addEventListener('mouseout', () => {
    item.style.backgroundColor = 'transparent';
  });
});

// Add animation for status indicators
const statusIndicators = document.querySelectorAll('.status');
statusIndicators.forEach(indicator => {
  if (indicator.classList.contains('pending')) {
    setInterval(() => {
      indicator.style.opacity = indicator.style.opacity === '0.5' ? '1' : '0.5';
    }, 1000);
  }
});

// Handle Add More buttons
document.querySelectorAll('.add-more-btn').forEach(button => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    const isDocuments = button.classList.contains('documents-btn');
    const message = isDocuments ? 'Add New Document' : 'Add New Education Record';
    
    // Add animation effect
    button.style.transform = 'scale(0.95)';
    setTimeout(() => button.style.transform = 'scale(1)', 200);
    
    // Here you would typically open a modal or form
    alert(message + '\nThis feature will be implemented in the next phase.');
  });
});

document.addEventListener('DOMContentLoaded', () => {
    // Animate sections on load
    const sections = document.querySelectorAll('.profile-section');
    sections.forEach((section, index) => {
        setTimeout(() => {
            section.classList.add('animate-in');
        }, index * 200); // Stagger the animations
    });

    // Edit profile button functionality
    const editProfileBtn = document.querySelector('.edit-profile-btn');
    editProfileBtn?.addEventListener('click', () => {
        // Add edit mode class to make fields editable
        document.querySelectorAll('.info-item p').forEach(field => {
            field.contentEditable = true;
            field.classList.add('editable');
        });
        
        // Change button text and functionality
        editProfileBtn.innerHTML = '<span class="icon">💾</span> Save Changes';
        editProfileBtn.classList.add('save-mode');
        
        // Add cancel button
        if (!document.querySelector('.cancel-btn')) {
            const cancelBtn = document.createElement('button');
            cancelBtn.className = 'cancel-btn';
            cancelBtn.innerHTML = '<span class="icon">❌</span> Cancel';
            editProfileBtn.parentNode.insertBefore(cancelBtn, editProfileBtn.nextSibling);
            
            cancelBtn.addEventListener('click', () => {
                location.reload(); // Simple reload to cancel changes
            });
        }
    });

    // Security settings button functionality
    const securityBtn = document.querySelector('.security-btn');
    securityBtn?.addEventListener('click', () => {
        document.querySelector('.security-settings').scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    });

    // Avatar upload functionality
    const editAvatarBtn = document.querySelector('.edit-avatar-btn');
    const profileAvatar = document.querySelector('.profile-avatar');
    
    editAvatarBtn?.addEventListener('click', () => {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        
        input.onchange = (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    profileAvatar.src = e.target.result;
                    // Add animation class
                    profileAvatar.classList.add('avatar-updated');
                    setTimeout(() => {
                        profileAvatar.classList.remove('avatar-updated');
                    }, 1000);
                };
                reader.readAsDataURL(file);
            }
        };
        
        input.click();
    });

    // Biometric update buttons
    document.querySelectorAll('.update-btn, .register-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const action = this.classList.contains('update-btn') ? 'update' : 'register';
            const type = this.parentNode.querySelector('h3').textContent;
            
            // Show loading state
            const originalText = this.textContent;
            this.textContent = 'Processing...';
            this.disabled = true;
            
            // Simulate processing
            setTimeout(() => {
                this.textContent = originalText;
                this.disabled = false;
                
                // Update status if successful
                const statusEl = this.parentNode.querySelector('.status');
                if (statusEl) {
                    statusEl.textContent = 'Registered';
                    statusEl.className = 'status registered';
                }
                
                // Show success message
                alert(`Successfully ${action}ed ${type}`);
            }, 2000);
        });
    });

    // Toggle switches animation
    document.querySelectorAll('.switch input').forEach(toggle => {
        toggle.addEventListener('change', function() {
            const securityItem = this.closest('.security-item');
            securityItem.classList.add('setting-updated');
            setTimeout(() => {
                securityItem.classList.remove('setting-updated');
            }, 1000);
        });
    });
});

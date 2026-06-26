  document.getElementById('current-year-node').textContent = new Date().getFullYear();

        // High-Performance Responsive Intersection Observer
        const layoutRevealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    layoutRevealObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.03, rootMargin: "0px 0px -20px 0px" });

        document.querySelectorAll('.reveal-node-view').forEach(node => layoutRevealObserver.observe(node));

        // Form pipeline controller
        window.commitPlatformOnboarding = function(event) {
            event.preventDefault();
            const emailElement = document.getElementById('system-input-node');
            const structuralString = emailElement.value.trim();
            if (!structuralString) return false;

            try {
                const registrationStack = JSON.parse(localStorage.getItem('enrollize_waitlist') || '[]');
                if (!registrationStack.includes(structuralString)) registrationStack.push(structuralString);
                localStorage.setItem('enrollize_waitlist', JSON.stringify(registrationStack));
            } catch(e) {}

            emailElement.value = '';
            alert("Connection established successfully. Your tracking alert metrics have been queued.");
            return false;
        }
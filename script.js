// Portfolio Interactive Terminal Matrix Script Module
document.addEventListener("DOMContentLoaded", function () {
    // Get the current hour from the user's system clock (0 - 23)
    const currentHour = new Date().getHours();
    let greetingText = "";

    // Determine the correct greeting based on the hour
    if (currentHour >= 5 && currentHour < 12) {
        greetingText = "Good morning";
    } else if (currentHour >= 12 && currentHour < 18) {
        greetingText = "Good afternoon";
    } else {
        greetingText = "Good evening";
    }

    // the HTML element with the id 'greeting' and update its text
    const greetingElement = document.getElementById("greeting");
    if (greetingElement) {
        greetingElement.textContent = greetingText;
    }
});
document.addEventListener("DOMContentLoaded", () => {
    const terminal = document.getElementById("terminal-body");

    // terminal compilation logs sequence
    const systemLogs = [
        "[INFO] Spawning asynchronous payment API listener validation metrics.",
        "[INFO] Interfacing Daraja webhook configurations securely on port 443.",
        "[SUCCESS] Database synchronized. 0 software exceptions tracked.",
        "[STATUS] System ready to pipeline deployment orders."
    ];

    let delay = 2500;

    systemLogs.forEach((log) => {
        setTimeout(() => {
            const p = document.createElement("p");
            p.className = "text-slate-500 transition-all duration-300";

            if (log.includes("[SUCCESS]")) {
                p.innerHTML = `<span class="text-teal-400 font-bold">[SUCCESS]</span> ${log.split("[SUCCESS]")[1]}`;
            } else if (log.includes("[STATUS]")) {
                p.innerHTML = `<span class="text-cyan-400 font-bold">[STATUS]</span> ${log.split("[STATUS]")[1]}`;
            } else {
                p.innerHTML = log;
            }

            // Append logs immediately preceding the terminal baseline marker
            const cursorNode = terminal.lastElementChild;
            terminal.insertBefore(p, cursorNode);
            terminal.scrollTop = terminal.scrollHeight;
        }, delay);
        delay += 1800;
    });
});
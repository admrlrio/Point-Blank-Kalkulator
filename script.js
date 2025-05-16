document.addEventListener('DOMContentLoaded', () => {
    const ranks = [
        { "name": "Tengkorak (Trainee)", "expRequired": 0, "expToNextRank": 2000 },
        { "name": "Garis 1 (Senior Trainee)", "expRequired": 2000, "expToNextRank": 3000 },
        { "name": "Garis 2 (Private)", "expRequired": 5000, "expToNextRank": 4000 },
        { "name": "Garis 3 (Corporal)", "expRequired": 9000, "expToNextRank": 5000 },
        { "name": "Garis 4 (Sergeant)", "expRequired": 14000, "expToNextRank": 7000 },
        { "name": "V1 Kutip 1 (Staff Sgt. Grade 1)", "expRequired": 21000, "expToNextRank": 9000 },
        { "name": "V1 Kutip 2 (Staff Sgt. Grade 2)", "expRequired": 30000, "expToNextRank": 11000 },
        { "name": "V1 Emas (Staff Sgt. Grade 3)", "expRequired": 41000, "expToNextRank": 13000 },
        { "name": "V2 Kutip 1 (Sgt. 1 ST Class Grade 1)", "expRequired": 54500, "expToNextRank": 16000 },
        { "name": "V2 Kutip 2 (Sgt. 1 ST Class Grade 2)", "expRequired": 70500, "expToNextRank": 19000 },
        { "name": "V2 Kutip 3 (Sgt. 1 ST Class Grade 3)", "expRequired": 89000, "expToNextRank": 21000 },
        { "name": "V2 Emas (Sgt. 1 ST Class Grade 4)", "expRequired": 110000, "expToNextRank": 24000 },
        { "name": "V3 Kutip 1 (Master Sgt. Grade 1)", "expRequired": 134000, "expToNextRank": 27000 },
        { "name": "V3 Kutip 2 (Master Sgt. Grade 2)", "expRequired": 161000, "expToNextRank": 30000 },
        { "name": "V3 Kutip 3 (Master Sgt. Grade 3)", "expRequired": 191000, "expToNextRank": 33000 },
        { "name": "V3 Kutip 4 (Master Sgt. Grade 4)", "expRequired": 224000, "expToNextRank": 36000 },
        { "name": "V3 Emas (Master Sgt. Grade 5)", "expRequired": 260000, "expToNextRank": 41000 },
        { "name": "Diamond 1 Kutip 1 (2nd Lt. Grade 1)", "expRequired": 301000, "expToNextRank": 46000 },
        { "name": "Diamond 1 Kutip 2 (2nd Lt. Grade 2)", "expRequired": 347000, "expToNextRank": 51000 },
        { "name": "Diamond 1 Kutip 3 (2nd Lt. Grade 3)", "expRequired": 398000, "expToNextRank": 56000 },
        { "name": "Diamond 1 Emas (2nd Lt. Grade 4)", "expRequired": 454000, "expToNextRank": 62000 },
        { "name": "Diamond 2 Kutip 1 (1st Lt. Grade 1)", "expRequired": 516000, "expToNextRank": 68000 },
        { "name": "Diamond 2 Kutip 2 (1st Lt. Grade 2)", "expRequired": 584000, "expToNextRank": 74000 },
        { "name": "Diamond 2 Kutip 3 (1st Lt. Grade 3)", "expRequired": 658000, "expToNextRank": 80000 },
        { "name": "Diamond 2 Kutip 4 (1st Lt. Grade 4)", "expRequired": 738000, "expToNextRank": 86000 },
        { "name": "Diamond 2 Emas (1st Lt. Grade 5)", "expRequired": 824000, "expToNextRank": 93000 },
        { "name": "Diamond 3 Kutip 1 (Captain Grade 1)", "expRequired": 917000, "expToNextRank": 100000 },
        { "name": "Diamond 3 Kutip 2 (Captain Grade 2)", "expRequired": 1017000, "expToNextRank": 107000 },
        { "name": "Diamond 3 Kutip 3 (Captain Grade 3)", "expRequired": 1124000, "expToNextRank": 114000 },
        { "name": "Diamond 3 Kutip 4 (Captain Grade 4)", "expRequired": 1238000, "expToNextRank": 121000 },
        { "name": "Diamond 3 Emas (Captain Grade 5)", "expRequired": 1359000, "expToNextRank": 151000 },
        { "name": "Major 1 Kutip 1 (Major Grade 1)", "expRequired": 1510000, "expToNextRank": 181000 },
        { "name": "Major 1 Kutip 2 (Major Grade 2)", "expRequired": 1691000, "expToNextRank": 211000 },
        { "name": "Major 1 Kutip 3 (Major Grade 3)", "expRequired": 1902000, "expToNextRank": 241000 },
        { "name": "Major 1 Kutip 4 (Major Grade 4)", "expRequired": 2143000, "expToNextRank": 271000 },
        { "name": "Major 1 Emas (Major Grade 5)", "expRequired": 2414000, "expToNextRank": 311000 },
        { "name": "Major 2 Kutip 1 (Lt. Colonel Grade 1)", "expRequired": 2725000, "expToNextRank": 352000 },
        { "name": "Major 2 Kutip 2 (Lt. Colonel Grade 2)", "expRequired": 3076000, "expToNextRank": 391000 },
        { "name": "Major 2 Kutip 3 (Lt. Colonel Grade 3)", "expRequired": 3467000, "expToNextRank": 431000 },
        { "name": "Major 2 Kutip 4 (Lt. Colonel Grade 4)", "expRequired": 3898000, "expToNextRank": 471000 },
        { "name": "Major 2 Emas (Lt. Colonel Grade 5)", "expRequired": 4369000, "expToNextRank": 521000 },
        { "name": "Major 3 Kutip 1 (Colonel Grade 1)", "expRequired": 4890000, "expToNextRank": 571000 },
        { "name": "Major 3 Kutip 2 (Colonel Grade 2)", "expRequired": 5461000, "expToNextRank": 621000 },
        { "name": "Major 3 Kutip 3 (Colonel Grade 3)", "expRequired": 6082000, "expToNextRank": 671000 },
        { "name": "Major 3 Kutip 4 (Colonel Grade 4)", "expRequired": 6753000, "expToNextRank": 721000 },
        { "name": "Major 3 Emas (Colonel Grade 5)", "expRequired": 7474000, "expToNextRank": 781000 },
        { "name": "Bintang 1 (Brigadier)", expRequired: 8255000, expToNextRank: 851000 },
        { "name": "Bintang 2 (Major General)", expRequired: 9106000, expToNextRank: 931000 },
        { "name": "Bintang 3 (Lt. General)", expRequired: 10037000, expToNextRank: 1021000 },
        { "name": "Bintang 4 (General)", expRequired: 11058000, expToNextRank: 1121000 },
        { "name": "Bintang 5 (Commander)", expRequired: 12179000, expToNextRank: 87821000 },
        { "name": "Hero", expRequired: 100000000, expToNextRank: 0 },
    ];

    const currentRankSelect = document.getElementById('current-rank');
    const currentExpInput = document.getElementById('current-exp');
    const additionalExpInput = document.getElementById('additional-exp');
    const targetRankSelect = document.getElementById('target-rank');
    const targetExpInput = document.getElementById('target-exp');
    const clearAllButton = document.getElementById('clear-all');
    const resultsContent = document.getElementById('results-content');
    const errorAlert = document.getElementById('error-alert');

    const clearCurrentRankBtn = document.getElementById('clear-current-rank');
    const clearCurrentExpBtn = document.getElementById('clear-current-exp');
    const clearAdditionalExpBtn = document.getElementById('clear-additional-exp');
    const clearTargetRankBtn = document.getElementById('clear-target-rank');
    const clearTargetExpBtn = document.getElementById('clear-target-exp');

    const audioPlayer = document.getElementById('audio-player');
    const playPauseButton = document.getElementById('play-pause-button');
    const playPauseIcon = playPauseButton.querySelector('span');

    const placeholderText = `<p class="placeholder-text">Informasi pangkat yang dimasukan akan langsung keluar disini</p>`;

    function populateSelects() {
        currentRankSelect.innerHTML = '<option value="" disabled selected>Pilih Pangkat Saat Ini</option>';
        targetRankSelect.innerHTML = '<option value="" disabled selected>Pilih Pangkat Tujuan</option>';

        ranks.forEach(rank => {
            const option1 = document.createElement('option');
            option1.value = rank.name;
            option1.textContent = rank.name;
            currentRankSelect.appendChild(option1);

            const option2 = document.createElement('option');
            option2.value = rank.name;
            option2.textContent = rank.name;
            targetRankSelect.appendChild(option2);
        });
    }

    function sanitizePercentage(value) {
        const num = parseInt(value, 10);
        if (isNaN(num) || num < 0) return 0;
        if (num > 100) return 100;
        return num;
    }

    function sanitizeExp(value) {
        const num = parseInt(value, 10);
         if (isNaN(num) || num < 0) return 0;
         if (num > 999999999) return 999999999;
         return num;
    }

    function updateInputStates() {
        const hasAdditionalExp = additionalExpInput.value.trim() !== "" && additionalExpInput.value !== "0";
        const hasTargetRank = targetRankSelect.value !== "";

        additionalExpInput.disabled = hasTargetRank;
        targetRankSelect.disabled = hasAdditionalExp;
        targetExpInput.disabled = !hasTargetRank || hasAdditionalExp;

        additionalExpInput.closest('.input-group').classList.toggle('disabled', additionalExpInput.disabled);
        targetRankSelect.closest('.input-group').classList.toggle('disabled', targetRankSelect.disabled);
        targetExpInput.closest('.input-group').classList.toggle('disabled', targetExpInput.disabled);

        toggleClearButton(clearCurrentRankBtn, currentRankSelect.value, !currentRankSelect.disabled);
        toggleClearButton(clearCurrentExpBtn, currentExpInput.value, !currentExpInput.disabled);
        toggleClearButton(clearAdditionalExpBtn, additionalExpInput.value, !additionalExpInput.disabled);
        toggleClearButton(clearTargetRankBtn, targetRankSelect.value, !targetRankSelect.disabled);
        toggleClearButton(clearTargetExpBtn, targetExpInput.value, !targetExpInput.disabled);
    }

    function toggleClearButton(button, value, isEnabled) {
        if (button) {
            button.style.display = (value && value !== "" && isEnabled) ? 'inline-block' : 'none';
        }
    }

    function resetResultsDisplay() {
        resultsContent.innerHTML = placeholderText;
        errorAlert.style.display = 'none';
    }

    function displayResults(data) {
        errorAlert.style.display = 'none';
        const { finalRank, finalExpPercentage, ranksSkipped, totalExp, calculationType } = data;

        let totalExpLabelText = "Total EXP";
        if (calculationType === 'additional') {
            totalExpLabelText = "Total EXP Setelah Penambahan";
        } else if (calculationType === 'target') {
            totalExpLabelText = "Total EXP yang Dibutuhkan";
        } else if (calculationType === 'current') {
            totalExpLabelText = "Total EXP Saat Ini";
        }


        resultsContent.innerHTML = `
            <div class="results-grid">
                <div class="results-column">
                    <div class="result-item">
                        <h3 class="result-label">Pangkat Akhir</h3>
                        <p class="result-value">${finalRank || 'N/A'}</p>
                    </div>
                    <div class="result-item">
                        <h3 class="result-label">Persentase EXP</h3>
                        <p class="result-value">${finalExpPercentage !== undefined ? finalExpPercentage + '%' : 'N/A'}</p>
                    </div>
                </div>
                <div class="results-column">
                    <div class="result-item">
                        <h3 class="result-label">Jumlah Pangkat yang Dilewati</h3>
                        <p class="result-value">${ranksSkipped !== undefined ? ranksSkipped : 'N/A'}</p>
                    </div>
                    <div class="result-item">
                        <h3 class="result-label">${totalExpLabelText}</h3>
                        <p class="result-value">${totalExp !== undefined ? Math.ceil(totalExp).toLocaleString('id-ID') : 'N/A'}</p>
                    </div>
                </div>
            </div>
        `;
    }

    function showError(message) {
        resultsContent.innerHTML = placeholderText;
        errorAlert.querySelector('p').textContent = message;
        errorAlert.style.display = 'flex';
    }

    function calculateResults() {
        const currentRankName = currentRankSelect.value;
        const currentExpValueStr = currentExpInput.value;
        const additionalExpValueStr = additionalExpInput.value;
        const targetRankName = targetRankSelect.value;
        const targetExpValueStr = targetExpInput.value;

        updateInputStates();

        if (!currentRankName) {
            resetResultsDisplay();
            return;
        }

        const currentRankIndex = ranks.findIndex(rank => rank.name === currentRankName);
        if (currentRankIndex === -1) {
            resetResultsDisplay();
            return;
        }
        const currentRankData = ranks[currentRankIndex];
        const currentExpPercent = sanitizePercentage(currentExpValueStr);

        const currentExpContribution = currentRankData.expToNextRank > 0 ? (currentExpPercent / 100) * currentRankData.expToNextRank : 0;
        let currentTotalExp = currentRankData.expRequired + currentExpContribution;

        if (additionalExpValueStr && additionalExpValueStr !== "0" && !targetRankName) {
            const additionalExp = sanitizeExp(additionalExpValueStr);
             if (additionalExp === 0 && additionalExpValueStr !== "0" ) {
                 resetResultsDisplay();
                 return;
             }

            const newTotalExp = currentTotalExp + additionalExp;

            let newRankIndex = currentRankIndex;
            for (let i = currentRankIndex; i < ranks.length; i++) {
                if (i === ranks.length - 1) {
                    if (newTotalExp >= ranks[i].expRequired) {
                        newRankIndex = i;
                    }
                    break;
                }

                if (ranks[i + 1] && newTotalExp >= ranks[i + 1].expRequired) {
                     newRankIndex = i + 1;
                 } else {
                     if (newTotalExp >= ranks[i].expRequired) {
                         newRankIndex = i;
                     } else {
                         newRankIndex = Math.max(currentRankIndex, i -1 );
                     }
                    break;
                }
            }


            const newRankData = ranks[newRankIndex];
            let expPercentage = 0;

            if (newRankIndex < ranks.length - 1 && newRankData.expToNextRank > 0) {
                const expInCurrentRank = newTotalExp - newRankData.expRequired;
                expPercentage = Math.min(100, Math.max(0, Math.floor((expInCurrentRank / newRankData.expToNextRank) * 100)));
            } else if (newRankIndex === ranks.length - 1) {
                 expPercentage = 100;
             } else {
                 expPercentage = 0;
             }


            displayResults({
                finalRank: newRankData.name,
                finalExpPercentage: expPercentage,
                ranksSkipped: Math.max(0, newRankIndex - currentRankIndex),
                totalExp: newTotalExp,
                calculationType: 'additional'
            });

        } else if (targetRankName && (!additionalExpValueStr || additionalExpValueStr === "0")) {
            const targetRankIndex = ranks.findIndex(rank => rank.name === targetRankName);

            if (targetRankIndex === -1) {
                 resetResultsDisplay();
                 return;
             }

            if (targetRankIndex < currentRankIndex) {
                showError("⚠️ Pangkat Tujuan harus sama atau lebih tinggi dari Pangkat Saat Ini.");
                return;
            }

            const targetExpPercent = sanitizePercentage(targetExpValueStr);

             if (targetRankIndex === currentRankIndex) {
                 if (currentExpValueStr !== "" && targetExpPercent <= currentExpPercent) {
                     showError("⚠️ Persentase EXP Tujuan harus lebih besar dari EXP Saat Ini jika Pangkat Tujuan sama.");
                     return;
                 }
            }


            const targetRankData = ranks[targetRankIndex];
            let targetTotalExp = targetRankData.expRequired;

             if (targetRankIndex < ranks.length - 1 && targetRankData.expToNextRank > 0 && targetExpPercent > 0) {
                 targetTotalExp += (targetExpPercent / 100) * targetRankData.expToNextRank;
             } else if (targetRankIndex === ranks.length - 1) {
                 targetTotalExp = targetRankData.expRequired;
             }


            const expNeeded = targetTotalExp - currentTotalExp;

             displayResults({
                 finalRank: targetRankData.name,
                 finalExpPercentage: targetRankIndex === ranks.length - 1 ? 100 : targetExpPercent,
                 ranksSkipped: targetRankIndex - currentRankIndex,
                 totalExp: Math.max(0, expNeeded),
                 calculationType: 'target'
             });

        } else {
             if (currentRankName) {
                 displayResults({
                     finalRank: currentRankData.name,
                     finalExpPercentage: currentExpPercent,
                     ranksSkipped: 0,
                     totalExp: currentTotalExp,
                     calculationType: 'current'
                 });
             } else {
                  resetResultsDisplay();
             }
        }
    }

    function handleInputChange(event) {
        const input = event.target;
        let value = input.value;
        let sanitizedValue = value;

        if (input.type === 'number') {
            if (input.id === 'current-exp' || input.id === 'target-exp') {
                sanitizedValue = sanitizePercentage(value);
            } else if (input.id === 'additional-exp') {
                sanitizedValue = sanitizeExp(value);
            }

            if (value !== "" && String(sanitizedValue) !== value) {
                const start = input.selectionStart;
                const end = input.selectionEnd;
                 if (input.value !== String(sanitizedValue)) {
                     input.value = sanitizedValue;
                     try {
                       input.setSelectionRange(start, end);
                     } catch (e) {}
                 }
            }
        }
        calculateResults();
    }

    currentRankSelect.addEventListener('change', calculateResults);
    targetRankSelect.addEventListener('change', calculateResults);

    currentExpInput.addEventListener('input', handleInputChange);
    additionalExpInput.addEventListener('input', handleInputChange);
    targetExpInput.addEventListener('input', handleInputChange);

    clearAllButton.addEventListener('click', () => {
        currentRankSelect.value = "";
        currentExpInput.value = "";
        additionalExpInput.value = "";
        targetRankSelect.value = "";
        targetExpInput.value = "";
        calculateResults();
    });

    function createClearListener(element) {
        return () => {
            element.value = "";
             if (element.id === 'target-rank') {
                 targetExpInput.value = "";
             }
            calculateResults();
        };
    }

    clearCurrentRankBtn.addEventListener('click', createClearListener(currentRankSelect));
    clearCurrentExpBtn.addEventListener('click', createClearListener(currentExpInput));
    clearAdditionalExpBtn.addEventListener('click', createClearListener(additionalExpInput));
    clearTargetRankBtn.addEventListener('click', createClearListener(targetRankSelect));
    clearTargetExpBtn.addEventListener('click', createClearListener(targetExpInput));

    function togglePlayPause() {
        if (audioPlayer.paused || audioPlayer.ended) {
            audioPlayer.play().catch(error => {
                console.error("Audio play failed:", error);
            });
        } else {
            audioPlayer.pause();
        }
    }

    function updatePlayPauseIcon() {
        if (audioPlayer.paused || audioPlayer.ended) {
            playPauseIcon.textContent = '▶️';
             playPauseButton.setAttribute('aria-label', 'Play Audio');
        } else {
            playPauseIcon.textContent = '⏸️';
             playPauseButton.setAttribute('aria-label', 'Pause Audio');
        }
    }

    playPauseButton.addEventListener('click', togglePlayPause);
    audioPlayer.addEventListener('play', updatePlayPauseIcon);
    audioPlayer.addEventListener('pause', updatePlayPauseIcon);
    audioPlayer.addEventListener('ended', updatePlayPauseIcon);

    populateSelects();
    resetResultsDisplay();
    updateInputStates();
    updatePlayPauseIcon();
});
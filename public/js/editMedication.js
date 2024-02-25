document.getElementById('editmeds').addEventListener('submit', async (event) => {
    event.preventDefault();
    const id = document.getElementById('editmeds').getAttribute('data-id');
    const editMed = {
        genericName: document.getElementById('generic_name').value.trim(),
        dosage: document.getElementById('dosage').value.trim(),
        frequency: document.getElementById('frequency').value.trim(),
        description: document.getElementById('description').value.trim(),
        noteFromUser: document.getElementById('note_from_user').value.trim(),
    }
    const response = await fetch(`/api/medications/${id}`, {
        method: 'PUT',
        body: JSON.stringify(editMed),
        headers: {
            "Content-Type": "application/json"
        }
    })
    if (response.status === 200) {
        location.href = '/medication'
    }
});
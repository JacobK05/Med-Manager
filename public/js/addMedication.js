// const medicationForm = async (event) => {
//     event.preventDefault();

// const newMeds =  document.querySelector('.medForm'); 

// if(newMeds === true) {
//     const response = await fetch('/add')
// }
// }


// addEventListener('submit', newMeds);

document.getElementById('addmeds').addEventListener('submit', async (event) => {
    event.preventDefault();
    const newMed = {
        genericName: document.getElementById('generic_name').value.trim(),
        dosage: document.getElementById('dosage').value.trim(),
        frequency: document.getElementById('frequency').value.trim(),
        description: document.getElementById('description').value.trim(),
        noteFromUser: document.getElementById('note_from_user').value.trim(),
    }
   

    const response = await fetch('/api/medications', {
        method: 'POST',
        body: JSON.stringify(newMed),
        headers: {
            "Content-Type": "application/json"
        }
    })
    // console.log(response)
    if(response.status === 200) {
        location.href = '/medication'
    }
})
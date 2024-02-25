document.querySelector('.medications').addEventListener('click', async (event) => {
    event.preventDefault();
    console.log(event.target)
    if(event.target.matches('.delete')) {
        const id = event.target.closest('td').getAttribute('data-id')
        const response = await fetch(`/api/medications/${id}`, {
            method: 'DELETE',
    })
    if(response.status === 200) {
        location.href = '/medication'
    }
    }
})


document.querySelector('.medications').addEventListener('click', async (event) => {
    event.preventDefault();
    console.log(event.target)
    if(event.target.matches('.edit')) {
        const id = event.target.closest('td').getAttribute('data-id')
        location.href = `/medication/${id}`
    }
})

const checkboxes = document.querySelectorAll('.toggle-status')
checkboxes.forEach (async (checkbox) => {
    checkbox.addEventListener('click', async (event) => {
    event.preventDefault();
        console.log('hit')
        const id = event.target.closest('tr').getAttribute('data-id')
        const previousStatus = event.target.getAttribute('data-current-status')
        const status = previousStatus === 'taken' ? 'not-taken' : 'taken'
        const response = await fetch(`/api/medications/${id}`, {
            method: 'PUT',
            body: JSON.stringify({status, updatedStatus: true}),
            headers: {
                "Content-Type": "application/json"
            }
        })
        if(response.status === 200) {
            location.href = '/medication'
        } 
    })
})
// document.querySelector('.medications').addEventListener('change', async (event) => {
//     console.log("hit")
//     if(event.target.matches('.toggle-status')) {
//         const id = event.target.closest('tr').getAttribute('data-id')
//         const previousStatus = event.target.getAttribute('data-current-status')
//         const status = previousStatus === 'taken' ? 'not-taken' : 'taken'
//         const response = await fetch(`/api/medications/${id}`, {
//             method: 'PUT',
//             body: JSON.stringify({status}),
//             headers: {
//                 "Content-Type": "application/json"
//             }
//         })
//         if(response.status === 200) {
//             location.href = '/medication'
//         }
//     }
// })
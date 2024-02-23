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

$(document).ready(function() {
    fetch('data.json') // Replace with the URL of your data or your own data fetching logic
        .then(response => response.json())
        .then(data => {
            $('#data-table').DataTable({
                data: data,
                columns: [
                    { data: 'dag_id' },
                    { data: 'runs' },
                    { data: 'success' },
                    { data: 'failures' },
                    { data: 'duration_formatted' }
                ]
            });
        });
});

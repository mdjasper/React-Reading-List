export default() => (
    fetch('/api/recommendations')
        .then(response=>
            response.ok ? response.json() : Promise.reject(response))
)
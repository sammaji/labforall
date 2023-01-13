let usp = new URLSearchParams(window.location.search);
let usp_query = usp.get("run_sim");

const runSimulation = () => {
    document.getElementById('con-sim').classList.remove = 'no_display'
    document.getElementById('con-sim').style.display = 'block'
    document.getElementById('root').style.display = 'none'
}

const abortSimulation = () => {
    document.getElementById('con-sim').style.display = 'none'
    document.getElementById('root').style.display = 'block'
}

if (usp_query === 'true') {
    runSimulation()
} else abortSimulation()
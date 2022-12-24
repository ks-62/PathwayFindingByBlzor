
function MakeBarrier(cellId) {
    var e = document.getElementById(cellId);
    e.classList.add("barrier");
}

function MakeStart(cellId) {
    var e = document.getElementById(cellId);
    e.classList.add("start");
}

function MakeEnd(cellId) {
    var e = document.getElementById(cellId);
    e.classList.add("end");
}

function MakeOpen(cellId) {
    var e = document.getElementById(cellId);
    e.classList.add("open");
}

function MakeClosed(cellId) {
    var e = document.getElementById(cellId);
    e.classList.add("closed");
}

function MakePath(cellId) {
    var e = document.getElementById(cellId);
    e.classList.add("path");
}

function CheckClass(cellId, cellStatus) {
    let status = document.getElementById(cellId).classList.contains(cellStatus);
    console.log(status);
    return status;
}

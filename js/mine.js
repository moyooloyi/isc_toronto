//Hide and Show Events
function displayEvents() {
    let x = document.getElementById("see_events_btn");
    if (x.innerHTML === "CLICK TO SEE EVENTS") {
        x.innerHTML = "HIDE EVENTS ?";      
    } else {
        x.innerHTML = "CLICK TO SEE EVENTS";
    } 
    
    document.getElementById("events_timing_filter").classList.toggle("hide_events");
    document.getElementById("events_filter").classList.toggle("hide_events");
    document.getElementById("events_list").classList.toggle("hide_events");
    document.getElementById("events_nextPrevBtns").classList.toggle("hide_events");
    
}

//Events Switching
function upcoming() {
    document.getElementById("upcoming_events").classList.remove("hide_events");
    document.getElementById("past_events").classList.add("hide_events");
    document.getElementById("announcements").classList.add("hide_events");
    document.getElementById("upcoming_btn").classList.add("active");
    document.getElementById("pastbtn").classList.remove("active");
    document.getElementById("announcements_btn").classList.remove("active");
}
function past() {
    document.getElementById("upcoming_events").classList.add("hide_events");
    document.getElementById("past_events").classList.remove("hide_events");
    document.getElementById("announcements").classList.add("hide_events");
    document.getElementById("upcoming_btn").classList.remove("active");
    document.getElementById("pastbtn").classList.add("active");
    document.getElementById("announcements_btn").classList.remove("active");
}
function announcements() {
    document.getElementById("upcoming_events").classList.add("hide_events");
    document.getElementById("past_events").classList.add("hide_events");
    document.getElementById("announcements").classList.remove("hide_events");
    document.getElementById("upcoming_btn").classList.remove("active");
    document.getElementById("pastbtn").classList.remove("active");
    document.getElementById("announcements_btn").classList.add("active");
}

//Events News Switching
function showEvents() {
    document.getElementById("events").classList.remove("hide_events");
    document.getElementById("inthenews").classList.add("hide_events");
    document.getElementById("resources").classList.add("hide_events");
    document.getElementById("events_btn").classList.add("active");
    document.getElementById("inthenews_btn").classList.remove("active");
    document.getElementById("resources_btn").classList.remove("active");
}

function showNews() {
    document.getElementById("events").classList.add("hide_events");
    document.getElementById("inthenews").classList.remove("hide_events");
    document.getElementById("resources").classList.add("hide_events");
    document.getElementById("events_btn").classList.remove("active");
    document.getElementById("inthenews_btn").classList.add("active");
    document.getElementById("resources_btn").classList.remove("active");
}

function showresources() {
    document.getElementById("events").classList.add("hide_events");
    document.getElementById("inthenews").classList.add("hide_events");
    document.getElementById("resources").classList.remove("hide_events");
    document.getElementById("events_btn").classList.remove("active");
    document.getElementById("inthenews_btn").classList.remove("active");
    document.getElementById("resources_btn").classList.add("active");
}

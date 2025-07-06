function addSkill() {
    const input = document.getElementById("skillInput");
    const skill = input.value.trim();
    if (skill !== "") {
        const li = document.createElement("li");
        li.textContent = skill;
        document.getElementById("skillList").appendChild(li);
        input.value = "";
    }
}

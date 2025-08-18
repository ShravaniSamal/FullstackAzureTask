(function () {
  const API = "https://app-test-api-1.azurewebsites.net";
  document.getElementById("apiUrl").textContent = API || "(not set)";
  

  const apiBadge = document.getElementById("apiBadge");
  const list = document.getElementById("taskList");
  const input = document.getElementById("taskInput");
  const addBtn = document.getElementById("addBtn");
  const pingBtn = document.getElementById("pingBtn");

  const setBadge = (txt, ok) => {
    apiBadge.textContent = txt;
    apiBadge.style.color = ok ? "#9be59b" : "#ffb3b3";
    apiBadge.style.borderColor = ok ? "#2b5f2b" : "#5f2b2b";
  };

  async function getJSON(path, opts) {
    if (!API) throw new Error("API_URL not configured");
    const r = await fetch(API + path, opts);
    if (!r.ok) throw new Error(`${r.status} ${r.statusText}`);
    if (r.status === 204) return null;
    return r.json();
  }

  async function refresh() {
    try {
      const tasks = await getJSON("/api/tasks");
      list.innerHTML = "";
      for (const t of tasks) {
        const li = document.createElement("li");
        li.className = "item";
        const title = document.createElement("span");
        title.className = "title";
        title.textContent = t.title;

        const del = document.createElement("button");
        del.className = "del";
        del.textContent = "Delete";
        del.onclick = async () => {
          await getJSON(`/api/tasks/${t.id}`, { method: "DELETE" });
          refresh();
        };

        const actions = document.createElement("div");
        actions.className = "actions";
        actions.appendChild(del);

        li.appendChild(title);
        li.appendChild(actions);
        list.appendChild(li);
      }
      setBadge("API: online", true);
    } catch (e) {
      setBadge("API: offline", false);
    }
  }

  addBtn.onclick = async () => {
    const title = input.value.trim();
    if (!title) { input.focus(); return; }
    try {
      await getJSON("/api/tasks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title })
      });
      input.value = "";
      refresh();
    } catch (e) {
      alert("Failed to add: " + e.message);
    }
  };

  pingBtn.onclick = async () => {
    try {
      const res = await getJSON("/api/ping");
      alert("Ping: " + JSON.stringify(res));
    } catch (e) {
      alert("Ping failed: " + e.message);
    }
  };

  refresh();
})();

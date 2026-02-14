const assets = [
  { id: 662500200564001, name: "laptop", status: 1 },
  { id: 673000100364002, name: "projector", status: 0 },
  { id: 744001200561020, name: "UPS", status: 0 }
];

const table = document.getElementById("assetTable");
const selectAll = document.getElementById("selectAll");
const output = document.getElementById("output");

assets.forEach(asset => {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td><input type="checkbox" class="rowCheck" value="${asset.id}"></td>
    <td>${asset.id}</td>
    <td>${asset.name}</td>
    <td>${asset.status === 1 ? "Normal" : "Lost"}</td>
  `;
  table.appendChild(row);
});

selectAll.addEventListener("change", () => {
  document.querySelectorAll(".rowCheck").forEach(cb => cb.checked = selectAll.checked);
});

function showSelected() {
  const checked = [...document.querySelectorAll(".rowCheck:checked")].map(cb => cb.value);

  if (checked.length === 0) {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "Please select at least one asset"
    });
    return;
  }

  output.textContent = checked.join("    ");
}

function logout() {
  window.location.href = "index.html";
}

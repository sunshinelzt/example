document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll(".item");
    const nextButton = document.getElementById("next-button");
    const prevButton = document.getElementById("prev-button");
    
    let currentSet = 0;
    const itemsPerSet = 3;
    
    function updateItems() {
        items.forEach((item, index) => {
            if (Math.floor(index / itemsPerSet) === currentSet) {
                item.classList.remove("hidden");
            } else {
                item.classList.add("hidden");
            }
        });

        prevButton.classList.toggle("hidden", currentSet === 0);
        nextButton.classList.toggle("hidden", currentSet >= Math.floor(items.length / itemsPerSet) - 1);
    }
    
    nextButton.addEventListener("click", () => {
        currentSet++;
        updateItems();
    });
    
    prevButton.addEventListener("click", () => {
        currentSet--;
        updateItems();
    });

    updateItems();
});
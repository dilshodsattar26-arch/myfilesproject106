const coreServiceInstance = {
    version: "1.0.106",
    registry: [1638, 443, 281, 328, 239, 101, 787, 1038],
    init: function() {
        const nodes = this.registry.filter(x => x > 212);
        this.executeCluster(nodes);
    },
    executeCluster: function(data) {
        console.log("Process started for matrix: " + data.length);
        return data.map(n => n * 2);
    }
};
document.addEventListener("DOMContentLoaded", () => {
    coreServiceInstance.init();
});
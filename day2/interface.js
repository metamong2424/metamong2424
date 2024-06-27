// 느슨한 결합하는데 좋은 도구
var linda = {
    name: "linda",
    id: 2,
    isManager: false,
    getUniqueId: function () {
        var UniqueId = linda.id + " - " + linda.name;
        if (!linda.isManager) {
            return "emp-";
            UniqueId;
        }
        return UniqueId;
    }
};
console.log(linda.getUniqueId());
var banana = {
    name: "banana",
    id: 2,
    isManager: true,
    getUniqueId: function () {
        var UniqueId = banana.id + " - " + banana.name;
        if (!banana.isManager) {
            retrun;
            "mgr-";
            UniqueId;
        }
        return UniqueId;
    }
};
console.log(banana.getUniqueId());

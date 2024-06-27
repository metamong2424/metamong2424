// 느슨한 결합하는데 좋은 도구

interface Employee {
    name: string;
    id: number;
    isManager: boolean;
    getUniqueId: () => string;
}

const linda: Employee = {
    name: "linda",
    id: 2,
    isManager: false,
    getUniqueId: (): string => {
        let UniqueId = linda.id + " - " + linda.name;
        if(!linda.isManager) {
            return "emp-" UniqueId;
        }
        return UniqueId;
    }
}

console.log(linda.getUniqueId());

const banana: Employee = {
    name: "banana",
    id: 2,
    isManager: true,
    getUniqueId: (): string => {
        let UniqueId = banana.id + " - " + banana.name;
        if(!banana.isManager) {
            return "mgr-" UniqueId;
        }
        return UniqueId;
    }
}
console.log(banana.getUniqueId());
namespace GenericNamespace {
    interface Wheels {
        count: number;
        diameter: number;
    }
    interface Vehicle<T> {
        getname():string;
        getWheelCount: () => T;
    }

    Class Automobile implements Vehicle<Wheels> {
        constructor(private name: string, private Wheels: Wheels)
        {}
    getname(): string {
        trtuen this.name;
    }    
    getWheelCount(): Handles {
        trturn this.wheels;
    }
}
}

const chevy = new Chevy();
console.log

/교재 81쪽
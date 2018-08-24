//Object Orriented Programming + OOP Instance Methods + OOP Static Methods
class Instructor {
    constructor({ name, role = 'assistant' }) {
        this.name = name;
        this.role = role;
    }
    
    renderDetails() {
        console.log(`${this.name}: ${this.role}`);
    }
    
    static helloWorld() {
        console.log('Hi there');
    }
    
    static canTeach(instructor) {
        return (instructor.role === 'teacher');
    }
}

const jon = new Instructor({ name: 'Jon' });
const brayden = new Instructor({ name: 'Brayden', role: 'teacher' });
//jon.renderDetails();
//brayden.renderDetails();
//Instructor.helloWorld();
//jon.helloWorld(); //Can't use static method becuase jon is an instance
console.log(
    `${brayden.name} can teach: ${Instructor.canTeach(brayden)}`
    );
console.log(
    `${jon.name} can teach: ${Instructor.canTeach(jon)}`
    );
class Person
{
    constructor(name, surname)
    {
        this.name = name;
        this.surname = surname;
    }

    GetFullName() 
    {
        return `Name:${this.name} Surname:${this.surname}`;
    }
}

class Developer extends Person
{
    constructor(workExperience)
    {
        super.name = name;
        super.surname = surname;
        this.workExperience = workExperience;
    }

    GetFullInfo() 
    {
        return `${Person.GetFullName} Work Experience:${this.workExperience}`;
    }
}
class Person {
    public string firstName;
    public string lastName;

    public void DoSomething() {
        this.firstName = "John";
    }
}

class Program{
    public static void Main() {
        Person p = new Person();
        p.lastName = "smith";

    }
}
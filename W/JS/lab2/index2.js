let students = [
    {
        name: "Tú Anh",
        age: 21,
        email: "tuanh@techmaster.vn",
    },
    {
        name: "Chị Hạnh",
        age: 30,
        email: "hanh@techmaster.vn",
    },
    {
        name: "Quang",
        age: 24,
        email: "quang@techmaster.vn",
    },
    {
        name: "Cường",
        age: 25,
        email: "cuong@techmaster.vn",
    },
    {
        name: "Hoàng",
        age: 29,
        email: "hoang@techmaster.vn",
    },
    {
        name: "Ngọc",
        age: 27,
        email: "ngoc@techmaster.vn",
    },
    {
        name: "Huy",
        age: 19,
        email: "huy@techmaster.vn",
    },
];


students.sort((s1,s2) => s1.age - s2.age)

// let sum = students.reduce( ( sum,s )=> sum += s.age,0 )

let renderStudents = (students) => 
    students
        .map(
            ( {name,age ,email} , i) => `
                <tr>
                    <th scope="row">${i+1}</th>
                    <td>${name}</td>
                    <td>${age}</td>
                    <td>${email}</td>
                    <td>
                        <button class="btn btn-outline-primary">
                            <i class="bi bi-pencil"></i>
                        </button>
                   
                        <button class="btn btn-outline-primary">
                        <i class="bi bi-trash"></i>
                        </button>
                    </td>
                </tr>
            `
        )
        .join("");





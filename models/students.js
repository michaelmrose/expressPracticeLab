students = [
    { id: 1, name: "Bob Barker", grade: "C" },
    { id: 2, name: "Orlando Bloom", grade: "B" },
];

module.exports = {
    getAll: () => students,
    getOne: (id) => {
        return students.find((e) => e.id === id);
    },
};

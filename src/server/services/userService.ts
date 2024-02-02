export const userService = {
    authenticate,
};

function authenticate(email: string, password: string) {
    if (email !== "admin@admin.com" && password !== "admin") {
        return null;
    }

    const user = {
        id: "9001",
        name: "Web Admin",
        email: "admin@admin.com"
    };

    return user;
}
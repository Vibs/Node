1. Opret en nyt skema i db i MYSQL Workbench med denne:

    CREATE TABLE IF NOT EXISTS `dankmemes` (
    id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
    title varchar(255) NOT NULL,
    content varchar(600) NOT NULL
    #active BOOLEAN DEFAULT false
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


2. Gå ind og ret i db.config.js (app --> config --> db.config.js)
    Ret i oplysningerne:

    USER: "gruppe10",
    PASSWORD: "gruppe10",
    DB: "dank"

3. tilføj manuelt nogle dankmemes i db
```mermaid
erDiagram
    KATEGORIYA["Категорія"] }o--o{ PRODUKT["Продукт"] : "містить / належить"
    KATEGORIYA["Категорія"] }o--o{ POSTACHALNYK["Постачальник"] : "постачає категорії"

    PRODUKT["Продукт"] |o--o{ ZAPAS["Запас"] : "обліковується"
    LOKATSIYA["Локація"] |o--o{ ZAPAS["Запас"] : "зберігає"

    POSTACHALNYK["Постачальник"] ||--o{ POSTACHANNYA["Постачання"] : "виконує"
    LOKATSIYA["Локація"] ||--o{ POSTACHANNYA["Постачання"] : "приймає"
    KORISTUVACH["Користувач"] ||--o{ POSTACHANNYA["Постачання"] : "відповідає за"

    LOKATSIYA["Локація"] |o--o{ KORISTUVACH["Користувач"] : "закріплює"

    POSTACHANNYA["Постачання"] ||--|{ POZYTSIYA_POSTACHANNYA["Позиція в постачанні"] : "містить"
    PRODUKT["Продукт"] ||--o{ POZYTSIYA_POSTACHANNYA["Позиція в постачанні"] : "фігурує в"

    KATEGORIYA["Категорія"] {
        string id PK
        string nazva
    }

    PRODUKT["Продукт"] {
        string id PK
        string nazva
        string brend
        string artykul UK
        string shtrykhkod UK
        int minimalnyi_vik
        decimal tsina
        string opys
    }

    LOKATSIYA["Локація"] {
        string id PK
        string nazva
        string typ
        string adressa
        boolean chy_aktyvna
    }

    ZAPAS["Запас"] {
        string id PK, UK
        string posylannya_na_produkt FK
        string posylannya_na_lokatsiyu FK
        int kilkist
    }

    POSTACHALNYK["Постачальник"] {
        string id PK
        string nazva
        string telefon
        string poshta
        string opys
    }

    POSTACHANNYA["Постачання"] {
        string id PK
        string posylannya_na_postachalnyka FK
        string posylannya_na_lokatsiyu FK
        string posylannya_na_korystuvacha FK
        time data
        boolean chy_aktyvnyi
    }

    POZYTSIYA_POSTACHANNYA["Позиція в постачанні"] {
        string id PK
        string posylannya_na_postachannya FK
        string posylannya_na_produkt FK
        int kilkist
        decimal tsina_zakupky
    }

    KORISTUVACH["Користувач"] {
        string id PK
        string posylannya_na_lokatsiyu FK
        string imya
        string rol
        string telefon
        string poshta
        boolean chy_aktyvnyi
    }
```
//omity usuwa elementy
//pick zostawia.. elementy wymienione
//partial zamiana wszystkie pola na opcjonalne ..ze znakami ?
//tworzenie mapy z elementów

interface SuperComplexType {
    name: string;
    age: number;
    street: string;
    state: string;
    zip: string;
    employeeId: number;
    dateStarted: Date;
    favoriteFood: string;
    favoriteColor: string;
    favoriteSportsTeam: string;
    homeTown: string;
    corporateOfficeCity: string;
}
// usuwa elementy z listy
type SimpleType = Omit<
SuperComplexType,
"name"|"age"|"corporateOfficeCity"
>;

// Zostawia wymienione elementy
type SimpleTypePick = Pick<
SuperComplexType,
"name"|"age"|"corporateOfficeCity"
>;

// zamiana wszystkich pól na opcjonalne
type PartialUser = Partial<SuperComplexType>;

type PageMap = Record<"home"|"about"|"contact",string>


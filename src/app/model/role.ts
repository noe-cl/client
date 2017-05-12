/**
 * Created by miu on 12/05/17.
 */
export class Role {

    public static MASTER = new Role(1, 'Maître');
    public static FOUNDER = new Role(2, 'Fondateur');
    public static OFFICIER = new Role(3, 'Officier');
    public static MEMBER = new Role(4, 'Membre');
    public static GUEST = new Role(5, 'Invité');

    public static forId(id: number): Role {
        return [Role.MASTER, Role.FOUNDER, Role.OFFICIER, Role.MEMBER, Role.GUEST][id - 1];
    }

    private constructor(private _id: number, private _name: string) {
    }

    public get id(): number {
        return this._id;
    }

    public get name(): string {
        return this._name;
    }
}

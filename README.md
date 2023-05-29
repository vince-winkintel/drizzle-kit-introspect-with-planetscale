# Drizzle-Kit Introspect with PlanetScale

This project demonstrates how to use [Drizzle-Kit](https://orm.drizzle.team/kit-docs/overview) to introspect a [PlanetScale](https://planetscale.com/) database.

## Installation

```bash
git clone https://github.com/vince-winkintel/drizzle-kit-introspect-with-planetscale.git
cd drizzle-kit-introspect-with-planetscale
npm install
```

## Usage

First, copy the `.env.example` file to `.env` and fill in the values for your PlanetScale database.

Then, run the following command to introspect the database:

```bash
cp .env.example .env
```

Update the `.env` file with your PlanetScale database URL which contains the credentials.

Finally, run the `db:pull` command to introspect the database:

```bash
npm run db:pull
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)

export type TodoItem = {
  id: string
  category: { no: string; en: string }
  task: { no: string; en: string }
  done: boolean
  volunteer?: boolean
}

export const todos: TodoItem[] = [
  // Lineup
  { id: '1', category: { no: 'Lineup', en: 'Lineup' }, task: { no: 'Flammer Dance Band bekreftet', en: 'Flammer Dance Band confirmed' }, done: true },
  { id: '2', category: { no: 'Lineup', en: 'Lineup' }, task: { no: 'Tuva og Valkyrien All Star bekreftet', en: 'Tuva og Valkyrien All Star confirmed' }, done: true },
  { id: '3', category: { no: 'Lineup', en: 'Lineup' }, task: { no: 'Tigerstate bekreftet', en: 'Tigerstate confirmed' }, done: true },
  { id: '4', category: { no: 'Lineup', en: 'Lineup' }, task: { no: 'Todd Terje bekreftet', en: 'Todd Terje confirmed' }, done: true },
  { id: '5', category: { no: 'Lineup', en: 'Lineup' }, task: { no: 'Three Sous bekreftet', en: 'Three Sous confirmed' }, done: true },
  { id: '6', category: { no: 'Lineup', en: 'Lineup' }, task: { no: 'Pumpegris bekreftet', en: 'Pumpegris confirmed' }, done: true },
  { id: '7', category: { no: 'Lineup', en: 'Lineup' }, task: { no: 'Why Kai bekreftet', en: 'Why Kai confirmed' }, done: true },
  // Venue
  { id: '8', category: { no: 'Venue', en: 'Venue' }, task: { no: 'Venue bestemt', en: 'Venue secured' }, done: false },
  { id: '9', category: { no: 'Venue', en: 'Venue' }, task: { no: 'Scene og PA-system leid', en: 'Stage and PA system rented' }, done: false },
  { id: '10', category: { no: 'Venue', en: 'Venue' }, task: { no: 'Toaletter og fasiliteter ordnet', en: 'Toilets and facilities arranged' }, done: false },
  // Lyd & lys
  { id: '11', category: { no: 'Lyd & lys', en: 'Sound & lighting' }, task: { no: 'Lydsjef hyret inn', en: 'Sound engineer hired' }, done: false, volunteer: true },
  { id: '12', category: { no: 'Lyd & lys', en: 'Sound & lighting' }, task: { no: 'Lysdesign planlagt', en: 'Lighting design planned' }, done: false, volunteer: true },
  // Backstage
  { id: '13', category: { no: 'Backstage', en: 'Backstage' }, task: { no: 'Backstage catering planlagt', en: 'Backstage catering planned' }, done: false },
  { id: '14', category: { no: 'Backstage', en: 'Backstage' }, task: { no: 'Garderober ordnet', en: 'Dressing rooms arranged' }, done: false },
  // Billett
  { id: '15', category: { no: 'Billett', en: 'Tickets' }, task: { no: 'Ticketmaster-oppføring live', en: 'Ticketmaster listing live' }, done: false },
  // Media
  { id: '16', category: { no: 'Media', en: 'Media' }, task: { no: 'Fotograf booket', en: 'Photographer booked' }, done: false, volunteer: true },
  { id: '17', category: { no: 'Media', en: 'Media' }, task: { no: 'Videograf booket', en: 'Videographer booked' }, done: false, volunteer: true },
  { id: '18', category: { no: 'Media', en: 'Media' }, task: { no: 'Pressemelding sendt', en: 'Press release sent' }, done: false },
  // Frivillige
  { id: '19', category: { no: 'Frivillige', en: 'Volunteers' }, task: { no: 'Vakter ved inngangen', en: 'Entry/ticket checking staff' }, done: false, volunteer: true },
  { id: '20', category: { no: 'Frivillige', en: 'Volunteers' }, task: { no: 'Bar-frivillige', en: 'Bar volunteers' }, done: false, volunteer: true },
  { id: '21', category: { no: 'Frivillige', en: 'Volunteers' }, task: { no: 'Sikkerhetsvakter', en: 'Security staff' }, done: false, volunteer: true },
  // Kommunikasjon
  { id: '22', category: { no: 'Kommunikasjon', en: 'Communication' }, task: { no: 'Discord-server opprettet', en: 'Discord server created' }, done: true },
  { id: '23', category: { no: 'Kommunikasjon', en: 'Communication' }, task: { no: 'Nettside live', en: 'Website live' }, done: false },
]

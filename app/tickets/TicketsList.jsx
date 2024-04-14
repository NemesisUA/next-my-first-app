const getTickets = async () => {
  // http://localhost:4000/tickets
  const res = await fetch('https://nemesisua.github.io/api-tickets/tickets.json', { 
    next: {
      revalidate: 0 // when we set to 0, we opt out of using cache
    }
  })

  // we return a promice, so TicketsList must be async func
  // and we can make it async as it is a server component
  return res.json();
}


const TicketsList = async () => {
  const tickets = await getTickets();

  return (
    <>
      {tickets.map((ticket) => (
        <div key={ticket.id} className="card my-5">
          <h3>{ticket.title}</h3>
          <p>{ticket.body.slice(0, 200)}...</p>
          <div className={`pill ${ticket.priority}`}>
            {ticket.priority} priority
          </div>
        </div>
      ))}
      {tickets.length === 0 && (
        <p className="text-center">There are no open tickets.</p>
      )}
    </>
  )
}

export default TicketsList

import PageHeader from '../components/PageHeader'
import ServiceCard from '../components/ServiceCard'
import { services } from '../data'
export default function Services(){return <><PageHeader eyebrow="SHIFT Services" title="Choose the relocation service you need." text="Explore the core services available in the platform and send a request with your pickup, destination and preferred date."/><section className="section-pad"><div className="container-page grid gap-6 md:grid-cols-2">{services.map((service,i)=><ServiceCard key={service.title} service={service} index={i}/>)}</div></section></>}

import React, { useState } from "react"
import { useParams } from "react-router-dom"
import {
  Gallery,
  Tag,
  Button,
  Attribute,
  Review,
  Rating,
  Separator,
  MarkerIcon,
} from "lib"
import { Typography, Avatar, Card } from "@material-ui/core"
import { Star } from "@material-ui/icons"
import styled from "styled-components"
import DatePicker from "react-datepicker"
import { Map as IMap, Marker, Popup, TileLayer } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import { theme } from "theme"
import _ from "lodash"

import "lib/react-datepicker.css"
import {
  dateToSlashedString,
  numberToCurrencyString,
  dateDiffInDays,
} from "helpers"

const PageWrapper = styled.div`
  margin-top: 120px;
`

const SectionWrapper = styled.div`
  & > * {
    margin: 30px 0;
  }
`

export default () => {
  const { id } = useParams()
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(null)

  return (
    <PageWrapper>
      <Typography variant="h2" color="primary">
        Nice family home with one spare room
      </Typography>
      <SectionWrapper>
        <GallerySection />
        <Separator />
        <IntroSection
          avatar=""
          hostname="Niklas Stylianou"
          since="January 2020"
          tags={["Student", "Calm", "Musician", "Moview fanatic", "Dutch"]}
          introtext="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim faucibus morbi tellus sed at arcu eu lobortis non. At mus felis vel tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim faucibus morbi tellus sed at arcu eu lobortis non. At mus felis vel tellus."
        />
        <Separator />
        <DescriptionSection
          attributes={{
            facilities: [
              "family_home",
              "seperate_bedroom",
              "hangers",
              "air_conditioner",
            ],
            houserules: ["no_smoking", "no_animals", "own_key"],
          }}
          introtext="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim faucibus morbi tellus sed at arcu eu lobortis non. At mus felis vel tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim faucibus morbi tellus sed at arcu eu lobortis non. At mus felis vel tellus."
        />
        <Separator />
        <SettlementSection
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
        />
        <Separator />
        <MapSection position={[51.505, -0.09]} />
        <Separator />
        <ReviewSection
          reviews={[
            {
              avatar: "",
              name: "Niklas Stylianou",
              date: "January 2020",
              rating: 4.5,
              since: "August 2020",
              text:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim faucibus morbi tellus sed at arcu eu lobortis non. At mus felis vel tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim faucibus morbi tellus sed at arcu eu lobortis non. At mus felis vel tellus.",
            },
            {
              avatar: "",
              name: "Niklas Stylianou",
              date: "January 2020",
              rating: 4.5,
              since: "August 2020",
              text:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim faucibus morbi tellus sed at arcu eu lobortis non. At mus felis vel tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim faucibus morbi tellus sed at arcu eu lobortis non. At mus felis vel tellus.",
            },
          ]}
        />
      </SectionWrapper>
    </PageWrapper>
  )
}

const PriceLocation = ({ price, location, ...props }) => (
  <div {...props}>
    <Typography variant="h3" color="primary">
      {price}€ / Night
    </Typography>
    <Typography variant="subtitle2">{location}</Typography>
  </div>
)

const GallerySection = () => (
  <section>
    <Gallery
      images={[
        {
          src:
            "https://cdn.archilovers.com/projects/c_383_9ec19d18-107e-41f9-bddf-4fc03411b2b5.jpg",
        },
        {
          src:
            "https://cdn.archilovers.com/projects/c_383_0ae4fd71-61a0-434b-9689-9525dd57b9aa.jpg",
        },
        {
          src:
            "https://cdn.archilovers.com/projects/c_383_1d327551-45b1-401b-b281-3cb7dc6f271f.jpg",
        },
        {
          src:
            "https://cdn.archilovers.com/projects/c_383_57d7daff-e586-4a1b-83b3-8d5bf0f8e070.jpg",
        },
      ]}
    />
    <PriceLocation
      price={13}
      location="Rochumsbuurt, Eindhoven"
      style={{
        paddingTop: "20px",
      }}
    />
  </section>
)

const IntroductionHeader = ({ avatar, hostname, since, tags, ...props }) => {
  return (
    <div {...props}>
      <Avatar
        src={avatar}
        alt={hostname}
        style={{
          width: "124px",
          height: "124px",
          float: "left",
          marginRight: "20px",
        }}
      />
      <Typography variant="h5" color="textPrimary">
        {hostname}
      </Typography>
      <h6
        style={{
          fontStyle: "italic",
          fontWeight: "300",
          color: "2D2D2D",
          margin: "0",
          fontSize: "18px",
        }}
      >
        Host since {since}
      </h6>
      <div style={{ display: "flex", flexWrap: "wrap", marginTop: "10px" }}>
        {tags.map(text => (
          <Tag text={text} style={{ marginRight: "10px", marginTop: "10px" }} />
        ))}
      </div>
    </div>
  )
}

const IntroSection = ({ avatar, hostname, since, tags, introtext }) => {
  return (
    <section>
      <IntroductionHeader
        avatar={avatar}
        hostname={hostname}
        since={since}
        tags={tags}
        style={{ paddingBottom: "50px " }}
      />
      <Typography variant="h5" color="textPrimary">
        Short introduction
      </Typography>
      <Typography variant="body1" color="textPrimary">
        {introtext}
      </Typography>
      <Button
        style={{
          height: "46px",
          whiteSpace: "nowrap",
          marginTop: "40px",
          padding: "0 30px",
        }}
        variant="outlined"
        color="primary"
      >
        See profile
      </Button>
    </section>
  )
}

const Rules = styled.div`
  display: flex;
  width: 100%;
  padding-top: 36px;
`

const RulesContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

const DescriptionSection = ({ introtext, attributes }) => (
  <section>
    <Typography variant="h3" color="primary">
      Description
    </Typography>
    <Typography
      variant="body1"
      color="textPrimary"
      style={{ paddingTop: "16px " }}
    >
      {introtext}
    </Typography>
    <Rules>
      <RulesContainer>
        <Typography variant="h3" color="primary">
          Facilities
        </Typography>
        {attributes.facilities.map(type => (
          <Attribute type={type} style={{ marginTop: "12px" }} />
        ))}
      </RulesContainer>
      <RulesContainer>
        <Typography variant="h3" color="primary">
          Houserules
        </Typography>
        {attributes.houserules.map(type => (
          <Attribute type={type} style={{ marginTop: "12px" }} />
        ))}
      </RulesContainer>
    </Rules>
  </section>
)

const DateView = ({ header, date, subscript, ...props }) => {
  return (
    <>
      <Typography variant="subtitle1" color="textPrimary">
        {header}
      </Typography>
      <Typography variant="body1" color="textPrimary">
        {date}
      </Typography>
      <Typography variant="subtitle1" color="primary">
        {subscript}
      </Typography>
    </>
  )
}

const Grid = styled.div``
const Row = styled.div`
  display: flex;
`
const Col = styled.div`
  flex: ${props => (props.size ? props.size : 1)};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const CardContent = styled.div``

const Circle = styled.div`
  position: absolute;
  border-radius: 50%;
  top: 20px;
  left: 45.5%;
  width: 76px;
  height: 76px;
  background-color: ${theme.palette.primary.light};
  filter: opacity(30%);
`

const Settlement = ({
  arrivalDate,
  departureDate,
  pricePerNight,
  avatarTenant,
  avatarHost,
  ...props
}) => {
  const numberOfNights = dateDiffInDays(
    arrivalDate,
    departureDate ? departureDate : arrivalDate
  )

  const priceOfStay = numberOfNights * pricePerNight

  return (
    <Card elevation={4} {...props}>
      <CardContent>
        <Grid>
          <Row>
            <Col
              style={{ borderBottom: "solid 1px #dbdbdb", padding: "12px 0" }}
            >
              <DateView
                header="Date of arrival"
                date={dateToSlashedString(arrivalDate)}
                subscript="Estimated date of arrival"
              />
            </Col>
            <Col
              style={{
                borderBottom: "solid 1px #dbdbdb",
                borderLeft: "solid 1px #dbdbdb",
              }}
            >
              <DateView
                header="Date of departure"
                date={dateToSlashedString(
                  departureDate ? departureDate : arrivalDate
                )}
                subscript="Estimated date of departure"
              />
            </Col>
          </Row>
          <Row style={{ minHeight: "120px", position: "relative" }}>
            {/* TODO: this is really not scalable. */}
            <Avatar
              src={avatarHost}
              alt="host"
              style={{
                position: "absolute",
                top: "20px",
                left: "39.5%",
                width: "76px",
                height: "76px",
                zIndex: 10,
              }}
            />
            <Circle />
            <Avatar
              src={avatarTenant}
              alt="tenant"
              style={{
                position: "absolute",
                top: "20px",
                right: "39.5%",
                width: "76px",
                height: "76px",
                zIndex: 10,
              }}
            />
          </Row>
          <Row>
            <Col>
              <Typography variant="subtitle1" color="textPrimary">
                Amount of nights
              </Typography>
              <Typography variant="body1" color="textPrimary">
                {numberOfNights}
              </Typography>
            </Col>
            <Col>
              <Typography variant="subtitle1" color="textPrimary">
                Price per night
              </Typography>
              <Typography variant="body1" color="textPrimary">
                {numberToCurrencyString(pricePerNight)}
              </Typography>
            </Col>
            <Col>
              <Typography variant="subtitle1" color="textPrimary">
                Price of stay
              </Typography>
              <Typography variant="body1" color="textPrimary">
                {numberToCurrencyString(priceOfStay)}
              </Typography>
            </Col>
          </Row>
          <Row>
            <Col style={{ margin: "20px 0" }}>
              <Button
                style={{
                  height: "46px",
                  whiteSpace: "nowrap",
                  padding: "0 60px",
                }}
                variant="contained"
                color="primary"
              >
                Contact host
              </Button>
              <Typography variant="subtitle1" color="textPrimary">
                This is not a reservation
              </Typography>
            </Col>
          </Row>
        </Grid>
      </CardContent>
    </Card>
  )
}

const SettlementWrapper = styled.div`
  display: flex;

  & > * {
    flex-grow: 1;
  }
`

const SettlementSection = ({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
}) => (
  <section>
    <SettlementWrapper>
      <DatePicker
        selected={startDate}
        onChange={dates => {
          const [start, end] = dates
          setStartDate(start)
          setEndDate(end)
        }}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        inline
      />
      <Settlement
        arrivalDate={startDate}
        departureDate={endDate}
        pricePerNight={12}
        style={{ flexGrow: 2 }}
      />
    </SettlementWrapper>
  </section>
)

const Map = styled(IMap)`
  width: 100%;
  height: 600px;
  border-radius: 12px;
  margin-top: 20px;
`

const MapSection = ({ position }) => (
  <section>
    <Typography variant="h3" color="primary">
      Location
    </Typography>
    <Map center={position} zoom={13}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position} icon={MarkerIcon} />
    </Map>
  </section>
)

const CategoryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: ${props => props.minWidth};
  max-width: ${props => props.maxWidth};
`

const ReviewCategory = ({ name, rating }) => {
  return (
    <CategoryContainer minWidth="300px" maxWidth="400px">
      <Typography variant="body1">{name}</Typography>
      <CategoryContainer minWidth="180px" maxWidth="180px">
        <Rating disabled precision={0.5} defaultValue={rating} size="small" />
        <Typography variant="body1">{rating}</Typography>
      </CategoryContainer>
    </CategoryContainer>
  )
}

const CategorySummary = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 100px;
  flex-wrap: wrap;
`

const CategoryHeader = styled.div`
  display: flex;
  align-item: center;
  margin: 20px 0;

  & > * {
    margin-right: 10px;
  }
`

const ReviewSummary = ({ categories, rating, nrofReviews }) => {
  return (
    <div>
      <Typography variant="h3" color="primary">
        Reviews
      </Typography>
      <CategoryHeader>
        <Star style={{ fill: "#ffb400" }} />
        <Typography
          style={{ display: "flex", alignItems: "center" }}
          variant="h5"
        >{`${rating} (${nrofReviews} reviews)`}</Typography>
      </CategoryHeader>
      <CategorySummary>
        {categories.map(({ name, rating }) => (
          <ReviewCategory name={name} rating={rating} />
        ))}
      </CategorySummary>
    </div>
  )
}

const ReviewBody = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;

  & > * {
    margin: 20px 0;
  }
`

const ReviewSection = ({ reviews }) => {
  return (
    <div>
      <ReviewSummary
        categories={[
          { name: "Price-Quality ratio", rating: "3.17" },
          { name: "Communication", rating: "4.22" },
          { name: "Location", rating: "2.10" },
          { name: "Support", rating: "4.34" },
          { name: "Cleanliness", rating: "4.77" },
        ]}
        rating={4.78}
        nrofReviews={31}
      />
      <ReviewBody>
        {reviews.map(({ avatar, name, date, rating, since, text, style }) => (
          <Review
            avatar={avatar}
            name={name}
            date={date}
            rating={rating}
            since={since}
            text={text}
            style={{ margin: "100px" }}
          />
        ))}
      </ReviewBody>
    </div>
  )
}

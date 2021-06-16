import React from 'react'
import { connect } from 'react-redux'
import { Card, CardActionArea, Typography, CardContent, CardActions, Button} from '@material-ui/core'

export const ProductCard = (props) => {
    const styles = {
        cardContainer:{
            width:'400px',
            maxHeight:'800px',
            margin:'10px',

        },
        cardImage:{
            objectFit:'contain',
            width:"100%"
        },
        cardText:{
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            overflow:'hidden',
            color:'#AB8E4E',
        },
        learnMoreText:{
            color:'#2C1A08'
        }
    }
    return (
        <div style={styles.cardContainer}>
            <Card>
                <CardActionArea>
                    <img style={styles.cardImage} src="https://picsum.photos/200" alt="Random" />
                    <CardContent>
                    <Typography style={styles.cardText} gutterBottom variant="h5" component="h2">
                        {props.name}
                    </Typography>
                    <Typography variant="body2" style={styles.cardText} color="textSecondary" component="p">
                        {props.details} 
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" style={styles.learnMoreText}>
                    Learn More
                    </Button>
                </CardActions>
                </Card>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard)

import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Form.css';
import checked from '../images/check.svg';
import alert from '../images/alert.svg';
import link from '../images/link.svg';

class Form extends React.Component {
  render() {
    const { onInputChange,
      cardName,
      cardAttr1, 
      cardAttr2,
      cardAttr3,
      cardTrunfo,
      cardImage,
      onSaveButtonClick,
      hasTrunfo,
      isSaveButtonDisabled, imgSaver } = this.props;
    const maxAttrValue = 90;
    const maxTotalValue = 210;

    return (
      <form>
        <h1 className='addCard'> Add new card</h1>
        <label htmlFor="name-input">
          Nome
        </label>
        <div className='inputLine'>
          <input
            type="text"
            id="nameInput"
            name="cardName"
            value={ cardName }
            onChange={ onInputChange }
          />
          {cardName ?
            <img src={ checked } alt="checked" className='checked' /> :
            <img src={ alert } alt="alert" className='alert' />}
        </div>

        <label htmlFor="description-input">
          Description
        </label>
        <textarea
          name="cardDescription"
          onChange={ onInputChange }
          id="descript"
        />

        <div className='attrDiv'>
          <div className='attrs'>
            <label htmlFor="att1">
              Str.
            </label>
            <input
              type="number"
              name="cardAttr1"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
            {cardAttr1 > 0 && cardAttr1 <= maxAttrValue
              ? <img src={ checked } alt="checked" className='checked' /> :
              <img src={ alert } alt="alert" className='alert' />}
          </div>

          <div className='attrs'>
            <label htmlFor="att2">
              Int.
              <input
                type="number"
                name="cardAttr2"
                value={ cardAttr2 }
                onChange={ onInputChange }
              />
            </label>
            {cardAttr2 > 0 && cardAttr2 <= maxAttrValue
              ? <img src={ checked } alt="checked" className='checked' /> :
              <img src={ alert } alt="alert" className='alert' />}
          </div>

          <div className='attrs'>
            <label htmlFor="att3">
              Agi.
              <input
                type="number"
                name="cardAttr3"
                value={ cardAttr3 }
                onChange={ onInputChange }
              />
            </label>

            {cardAttr3 > 0 && cardAttr3 <= maxAttrValue
              ? <img src={ checked } alt="checked" className='checked' /> :
              <img src={ alert } alt="alert" className='alert' />}
          </div>

          <div>
            <p className='remainingPoints'>Remaining Points: {
              maxTotalValue - cardAttr1 - cardAttr2 - cardAttr3
            }
            </p>
            {maxTotalValue - cardAttr1 - cardAttr2 - cardAttr3 < 0 ?
              <img src={ alert } alt="alert" className='alert' /> : <p />}

          </div>
        </div>

        <label htmlFor="imageInput" className='uploader'>
          <p className='imgName'>Image</p>
          <div className='linkDiv'>
            <img src={ link } alt="link btn" className='linkBtn' />
          </div>
          <input
            type="file"
            id="imageInput"
            onChange={ imgSaver }
            className="imgInput"
          />
          {cardImage ?
            <img src={ checked } alt="checked" className='checked' /> :
            <img src={ alert } alt="alert" className='alert' />}
        </label>


        <label htmlFor="rareInput">
          Rarity
        </label>
        <select
          id="rareInput"
          onChange={ onInputChange }
          className="rarity"
          name="cardRare"
        >
          <option value="normal">Normal</option>
          <option value="rare">Rare</option>
          <option value="very rare">Very Rare</option>
        </select>

        {hasTrunfo ? (<p>You already have a Top Trump</p>) : (
          <div className='trumpDiv'>
            <input
              type="checkbox"
              name="cardTrunfo"
              checked={ cardTrunfo }
              onChange={ onInputChange }
              className="trumpCheck"
            />
            <label htmlFor="trunfo-inpur">
              <p>Top Trump</p>
            </label>
          </div>
        )}

        <button
          type="submit"
          name="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
          className="sendBtn"
        >
          Save
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  cardImage: PropTypes.string.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  imgSaver: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};
export default Form;

<?php

namespace XVEngine\Bundle\SearchInputBundle\Component\Input\SearchInputComponent;

/**
 * Class AbstractParameter
 * @author Krzysztof Bednarczyk
 * @package XVEngine\Bundle\SearchInputBundle\Component\Input\SearchInputComponent
 */
abstract class AbstractParameter implements \JsonSerializable
{

    /**
     * @var string
     */
    protected $key;

    /**
     * @var string
     */
    protected $category = "Others";

    /**
     * @var string
     */
    protected $placeholder;


    /**
     * @var string[]
     */
    protected $operators = [
        "=",
        "<>",
        "<",
        ">"
    ];




    /**
     * AbstractParameter constructor.
     * @author Krzysztof Bednarczyk
     * @param string $key
     */
    public function __construct($key)
    {
        $this->key = $key;
    }


    /**
     * @author Krzysztof Bednarczyk
     * @return string
     */
    abstract function getType();

    /**
     * Get key value
     * @author Krzysztof Bednarczyk
     * @return string
     */
    public function getKey()
    {
        return $this->key;
    }

    /**
     * Set key value
     * @author Krzysztof Bednarczyk
     * @param string $key
     * @return  $this
     */
    public function setKey($key)
    {
        $this->key = $key;
        return $this;
    }






    /**
     * Get category value
     * @author Krzysztof Bednarczyk
     * @return string
     */
    public function getCategory()
    {
        return $this->category;
    }

    /**
     * Set category value
     * @author Krzysztof Bednarczyk
     * @param string $category
     * @return  $this
     */
    public function setCategory($category = "Others")
    {
        $this->category = $category;
        return $this;
    }

    /**
     * Get placeholder value
     * @author Krzysztof Bednarczyk
     * @return string
     */
    public function getPlaceholder()
    {
        return $this->placeholder;
    }

    /**
     * Set placeholder value
     * @author Krzysztof Bednarczyk
     * @param string $placeholder
     * @return  $this
     */
    public function setPlaceholder($placeholder)
    {
        $this->placeholder = $placeholder;
        return $this;
    }

    /**
     * Get operators value
     * @author Krzysztof Bednarczyk
     * @return \string[]
     */
    public function getOperators()
    {
        return $this->operators;
    }

    /**
     * Set operators value
     * @author Krzysztof Bednarczyk
     * @param \string[] $operators
     * @return  $this
     */
    public function setOperators($operators)
    {
        $this->operators = $operators;
        return $this;
    }





    /**
     * @author Krzysztof Bednarczyk
     */
    function jsonSerialize()
    {
        return [
            "key" => $this->getKey(),
            "category" => $this->getCategory(),
            "type" => $this->getType(),
            "placeholder" => $this->getPlaceholder(),
            "operators" => $this->getOperators(),
        ];
    }


}